import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import request from 'superagent';
import Seats from './Seats';
import {API_HOST} from '../../config';
import moment from 'moment';

class MyDialog extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.saveReservation = this.saveReservation.bind(this);
    this.updateReservation = this.updateReservation.bind(this);
    this.selectSeat = this.selectSeat.bind(this);

    this.state = {
      date: null,
      time: null,
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      selectedSeats: [[],[],[],[],[],[],[],[]],
      reservedSeats: [[],[],[],[],[],[],[],[]],
      step: 1
    }
  }

  componentWillMount(){
    let self = this;
    if (this.props.reservation){
        let selectedSeats = [
            [],[],[],[],[],[],[],[]
        ];
        this.props.reservation.reservedSeats.map(seat => {
            selectedSeats[seat.row].push(seat.column);
        })

       
        request.get(`${API_HOST}/reservation/${this.props.reservation.movieId}`)
        .query({movieId: this.props.reservation.movieId, date: moment(self.props.reservation.date).format(), time: self.props.reservation.time})
        .end(function (err, res){
            let reservedSeats = [[],[],[],[],[],[],[],[]]
            res.body.reservations.map((res) => {
                res.reservedSeats.map(seat => {
                    reservedSeats[seat.row].push(seat.column);
                })
            })
            self.setState({
                ...self.state,
                date: new Date(self.props.reservation.date),
                time: self.props.reservation.time,
                firstname: self.props.reservation.firstname,
                lastname: self.props.reservation.lastname,
                phone: self.props.reservation.phone,
                email: self.props.reservation.email,
                selectedSeats,
                reservedSeats
            })
        })
    }
  }

  nextStep(){
      this.setState({
          ...this.state,
          step: this.state.step + 1
      })
  }

  prevStep(){
      this.setState({
          ...this.state,
          step: this.state.step - 1
      })
  }

  saveReservation(){
    let payload = {
        date: this.state.date,
        time: this.state.time,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email: this.state.email,
        selectedSeats: this.state.selectedSeats,
        movieId: this.props.movie.id
    }
    request.post(`${API_HOST}/reservation`)
        .send(payload)
        .end(function(err, res){
        })

    this.setState({
        ...this.state,
        step: 3
    })
  }

  updateReservation(){
    let self = this;
    let payload = {
        id: this.props.reservation.id,
        date: this.state.date,
        time: this.state.time,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email: this.state.email,
        selectedSeats: this.state.selectedSeats,
    }
    request.put(`${API_HOST}/reservation`)
        .send(payload)
        .end(function(err, res){
            self.props.updateReservation()
        })
    this.setState({
        ...this.state,
        step: 3
    })
  }

  handleChangeDate = (event, date) => {
    let self = this;
    if (this.state.time){
        request.get(`${API_HOST}/reservation/${this.props.update ? this.props.reservation.movieId :  this.props.movie.id}`)
        .query({movieId: this.props.update ? this.props.reservation.movieId :  this.props.movie.id, date: moment(date).format(), time: this.state.time })
        .end(function (err, res){
            let reservedSeats = [[],[],[],[],[],[],[],[]]
            res.body.reservations.map((res) => {
                res.reservedSeats.map(seat => {
                    reservedSeats[seat.row].push(seat.column);
                })
            })
            self.setState({
                ...self.state,
                date,
                reservedSeats,
                selectedSeats: [[],[],[],[],[],[],[],[]]
              });
        })
    }
    else{
        this.setState({
            ...this.state,
            date,
            selectedSeats: [[],[],[],[],[],[],[],[]]
          }); 
    }
  };

  handleChangeTime = (event, index, time) => {
    let self = this;
    if (this.state.date){
        request.get(`${API_HOST}/reservation/${this.props.update ? this.props.reservation.movieId :  this.props.movie.id}`)
        .query({movieId: this.props.update ? this.props.reservation.movieId :  this.props.movie.id, date: moment(this.state.date).format(), time})
        .end(function (err, res){
            let reservedSeats = [[],[],[],[],[],[],[],[]]
            res.body.reservations.map((res) => {
                res.reservedSeats.map(seat => {
                    reservedSeats[seat.row].push(seat.column);
                })
            })
            self.setState({
                ...self.state,
                time,
                reservedSeats ,
                selectedSeats: [[],[],[],[],[],[],[],[]]
              });
        })
    }
    else{
        this.setState({
            ...this.state,
            time,
            selectedSeats: [[],[],[],[],[],[],[],[]]
          }); 
    }
  };

  handleFirstNameChange (e, value){
    this.setState({
        ...this.state,
        firstname: value
    })
  }

  handleLastNameChange (e, value){
    this.setState({
        ...this.state,
        lastname: value
    })
  }

  handlePhoneChange (e, value){
    this.setState({
        ...this.state,
        phone: value
    })
  }

  handleEmailChange (e, value){
    this.setState({
        ...this.state,
        email: value
    })
  }

  selectSeat(row, column){
      let seats = this.state.selectedSeats;
      let index = seats[row].indexOf(column)
      if (index >= 0){
          seats[row].splice(index,1);
      }
      else{
          seats[row].push(column);
      }
      this.setState({
          ...this.state,
          selectedSeats: seats
      })
  }

  renderFirstStep(){
      let appointments = [
        '12:30',
        '15:00',
        '19:00'
      ]

      const items = appointments.map((time) =>
        <MenuItem key={time} value={time} primaryText={time} />,
      )

      return (
          <div style={{height: '600px'}}>
            <DatePicker
              floatingLabelText="Foglalás Dátuma"
              autoOk={this.state.autoOk}
              minDate={new Date()}
              maxDate={new Date(moment().add(1, 'weeks').format())}
              value={this.state.date}
              disableYearSelection={this.state.disableYearSelection}
              onChange={this.handleChangeDate}
              secondary="true"
              style={{textAlign: 'center', marginTop: '-10px'}}/>
            <SelectField
              selectedMenuItemStyle={{color: 'rgb(0, 151, 167)'}}
              value={this.state.time}
              onChange={this.handleChangeTime}
              floatingLabelText="Időpont"
              style={{left: '50%', transform: 'translateX(-50%)', marginTop: '-20px'}}>
              {items}
            </SelectField>
            <div style={{ visibility: (this.state.date && this.state.time)? 'visible' : 'hidden'}} >
                <Seats selectSeat={this.selectSeat} selectedSeats={this.state.selectedSeats} reservedSeats={this.state.reservedSeats}/>
            </div>
          </div>
      )
  }

  renderSecondStep(){
      return (
          <div style={{textAlign: 'center'}}>
            <TextField
                floatingLabelText="Vezetéknév"
                value={this.state.lastname}
                onChange={this.handleLastNameChange}
            />
            <TextField
                floatingLabelText="Keresztnév"
                value={this.state.firstname}
                onChange={this.handleFirstNameChange}
            />
            <TextField
                floatingLabelText="Telefonszám"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
            />
            <TextField
                floatingLabelText="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
            />
          </div>
      )
  }

  renderThirdStep(){
    return (
        <div style={{textAlign: 'center'}}>
            { this.props.update ? 
            <h2> A foglalást sikeresen módosítottuk!</h2> 
            : 
            <h2> A foglalást sikeresen mentettük!</h2>
            } 
        </div>
    )
  }

  render(){
      const actions1 = [
        <FlatButton
            primary={true}
            label="Mégse"
            onClick={this.props.closeDialog}
            style={{marginRight: '10px'}}
        />,
        <RaisedButton
            label="Következő"
            primary={true}
            keyboardFocused={false}
            onClick={this.nextStep}
        />,
      ];

      const actions2 = [
        <FlatButton
            primary={true}
            label="Előző"
            onClick={this.prevStep}
            style={{marginRight: '10px'}}
        />,
        <RaisedButton
            label="Foglalás elküldése"
            primary={true}
            keyboardFocused={false}
            onClick={this.props.update ? this.updateReservation : this.saveReservation}
        />,
      ];
      const actions3 = [
            <RaisedButton
                label="Rendben"
                primary={true}
                keyboardFocused={false}
                onClick={this.props.closeDialog}
            />
      ]

      return (
          <div>
            <Dialog
              contentStyle={{width: '500px'}}
              title={this.props.update ? ("Foglalás módosítása: " + this.props.reservation.movie.title) : ("Jegyrendelés: " + this.props.movie.title)}
              actions={this.state.step == 1 ? actions1 : this.state.step == 2 ? actions2 : actions3}
              modal={false}
              open={this.props.show}
              onRequestClose={this.props.closeDialog}>
                {this.state.step == 1 ? this.renderFirstStep() : this.state.step == 2 ? this.renderSecondStep() : this.renderThirdStep()}
              </Dialog>
          </div>
      )

  }
}

export default MyDialog;
