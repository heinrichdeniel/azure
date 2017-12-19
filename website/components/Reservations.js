import React from 'react';
import Dialog from './common/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import request from 'superagent';
import moment from 'moment';
import {API_HOST} from '../config'; 
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const ListStyle = {
    width: '100%',
    left: '50%',
    position: 'relative',
    transform: 'translateX(-50%)',
    overflow: 'auto',
    height: 'calc(100vh - 70px)',
    margin: '15px auto',
    textAlign: 'center'
}

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.changeEmail = this.changeEmail.bind(this);
    this.getReservations = this.getReservations.bind(this);
    this.selectRow = this.selectRow.bind(this);
    this.changeDialogState = this.changeDialogState.bind(this);
    this.deleteReservation = this.deleteReservation.bind(this);

    this.state = {
      email: "",
      reservations: [],
      selectedRows: [],
      showDialog: false,
    }
  }

  changeEmail(e, value){
    this.setState({
      ...this.state,
      email: value
    })
  }

  getReservations(){
    let self = this;
    request.get(`${API_HOST}/reservation`)
    .query({email: this.state.email})
    .end(function(err, res){
        self.setState({
          ...self.state,
          reservations: res.body.reservations,
        })
    })
  }


  deleteReservation(){
    let self = this;
    request.delete(`${API_HOST}/reservation`)
    .send({id: this.state.reservations[this.state.selectedRows[0]].id})
    .end(function(err, res){
        self.setState({
          ...self.state,
          reservations: self.state.reservations.filter(res => res.id != self.state.reservations[self.state.selectedRows[0]].id)
        })
    })
}

  selectRow(rows){
    this.setState({
      ...this.state,
      selectedRows: rows
    })
  }

  changeDialogState(){
    this.setState({
      ...this.state,
      showDialog: !this.state.showDialog,
    })
  }

  render(){
    let reservations  = this.state.reservations || [];
    return (
        <div style={ListStyle}>
            <TextField
                floatingLabelText="E-mail cím"
                value={this.state.email}
                style={{marginRight: '50px'}}
                onChange={this.changeEmail}
            />
            <RaisedButton
                label="Jegyek mutatása"
                primary={true}
                keyboardFocused={false}
                style={{marginBottom: '50px'}}
                onClick={this.getReservations}
            />

          {<Table
            height='auto'
            fixedHeader={true}
            selectable={true}
            multiSelectable={false}
            style={{
              background: 'rgba(0,0,0,0.4',
              maxHeight: '360px'
            }}
            onRowSelection={this.selectRow}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={true}
              enableSelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn style={{color: '#fff', width: '50px', fontSize: '16px', textAlign: 'center'}} >ID</TableHeaderColumn>
                <TableHeaderColumn style={{color: '#fff', fontSize: '16px', textAlign: 'center'}} >Film</TableHeaderColumn>
                <TableHeaderColumn style={{color: '#fff', width: '150px', fontSize: '16px', textAlign: 'center'}} >Dátum</TableHeaderColumn>
                <TableHeaderColumn style={{color: '#fff', width: '150px', fontSize: '16px', textAlign: 'center'}} >Időpont</TableHeaderColumn>
                <TableHeaderColumn style={{color: '#fff', width: '50px', fontSize: '16px', textAlign: 'center'}} >Jegyek</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={true}
              deselectOnClickaway={false}
              showRowHover={false}
            >
              {reservations.map( (reservation, index) => (
                <TableRow selected={this.state.selectedRows.length > 0 && this.state.selectedRows[0] == index} key={index} style={{cursor: 'pointer'}}>
                  <TableRowColumn style={{color: '#fff', width: '50px', fontSize: '16px', textAlign: 'center'}}><div>{reservation.id}</div></TableRowColumn>
                  <TableRowColumn style={{color: '#fff', fontSize: '16px', textAlign: 'center'}}><div>{reservation.movie.title}</div></TableRowColumn>
                  <TableRowColumn style={{color: '#fff', width: '150px', fontSize: '16px', textAlign: 'center'}}><div>{moment(reservation.date).format("YYYY-DD-MM")}</div></TableRowColumn>
                  <TableRowColumn style={{color: '#fff', width: '150px', fontSize: '16px', textAlign: 'center'}}><div>{reservation.time}</div></TableRowColumn>
                  <TableRowColumn style={{color: '#fff', width: '50px', fontSize: '16px', textAlign: 'center'}}><div>{reservation.reservedSeats.length}</div></TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>}
          <div style={{display: this.state.selectedRows.length > 0 ? 'block' : 'none'}}>
            <RaisedButton
              label="Törlés"
              secondary={true}
              keyboardFocused={false}
              onClick={this.deleteReservation}
              style={{float: 'right', marginRight: '25px', marginTop: '25px'}}
            />

            <RaisedButton
              label="Módosítás"
              primary={true}
              keyboardFocused={false}
              onClick={this.changeDialogState}
              style={{float: 'right', marginRight: '25px', marginTop: '25px'}}
            />
          </div>
          {this.state.showDialog && <Dialog show={this.state.showDialog} closeDialog={this.changeDialogState} reservation={reservations[this.state.selectedRows[0]]} update updateReservation={this.getReservations} />}
      </div>
    )
  }
}

export default Reservations;
