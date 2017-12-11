import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';

class MyDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
    }
  }

  saveReservation(){

  }

  handleChangeDate = (event, date) => {
    this.setState({
      date,
    });
  };


  render(){
    const actions = [
      <RaisedButton
        label="Foglalás elküldése"
        primary={true}
        keyboardFocused={false}
        onClick={this.saveReservation}
        style={{marginRight: '10px'}}
      />,
      <FlatButton
        primary={true}
        label="Mégse"
        onClick={this.props.closeDialog}
      />,
    ];

    return (
        <div>
          <Dialog
            title={"Jegyrendelés: " + this.props.movie.title}
            actions={actions}
            modal={false}
            open={this.props.show}
            onRequestClose={this.props.closeDialog}
          >
          <DatePicker
            floatingLabelText="Foglalás Dátuma"
            autoOk={this.state.autoOk}
            minDate={this.state.minDate}
            maxDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
            onChange={this.handleChangeDate}
            secondary={true}
          />
          </Dialog>
        </div>
    )
  }
}

export default MyDialog;
