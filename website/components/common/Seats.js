import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class Seats extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    let {reservedSeats} = this.props;
    return (
        <div>
          <div style={{margin: '15px auto 5px', width: '255px'}}>Válassza ki a helyeket:</div>
          <Table
             height='300'
             style={{width: '240px', margin: 'auto', overflow: 'hidden'}}
             selectable={false}>
             <TableBody
                displayRowCheckbox={false}>
                 <TableRow style={{height: '30px'}}
                     displayBorder={false}>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '30px', display: 'inline-flex'}}></TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>1</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>2</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>3</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>4</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>5</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>6</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>7</TableRowColumn>
                   <TableRowColumn style={{padding: 0, height: '15px', width: '26px', display: 'inline-flex'}}>8</TableRowColumn>
                 </TableRow>
                 {this.props.selectedSeats.map((seats, index) => {
                     return (
                         <TableRow key={index} displayBorder={false}
                         style={{height: '30px', display: 'inline-flex'}}>
                           <TableRowColumn
                             style={{padding: 0, height: '30px', display: 'inline', width:'20px', marginTop: '5px'}}>{index + 1}</TableRowColumn>
                           <TableRowColumn
                             style={{padding: 0, height: '30px', display: 'inline'}}>
                             {reservedSeats[index].indexOf(1) >= 0 ?
                                  (
                                     <Checkbox
                                       checked
                                       iconStyle={{margin: '1px', fill: seats.indexOf(1) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                 )
                             :  (
                                     <Checkbox
                                       onCheck={this.props.selectSeat.bind(this,index , 1)}
                                       checked={seats.indexOf(1) >= 0}
                                       iconStyle={{margin: '1px'}}/>
                                 )
                             }
                          </TableRowColumn>
                          <TableRowColumn
                            style={{padding: 0, height: '30px', display: 'inline'}}>
                            {reservedSeats[index].indexOf(2) >= 0 ?
                                 (
                                    <Checkbox
                                      checked
                                      iconStyle={{margin: '1px', fill: seats.indexOf(2) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                )
                            :  (
                                    <Checkbox
                                      onCheck={this.props.selectSeat.bind(this,index , 2)}
                                      checked={seats.indexOf(2) >= 0}
                                      iconStyle={{margin: '1px'}}/>
                                )
                            }
                           </TableRowColumn>
                             <TableRowColumn
                               style={{padding: 0, height: '30px', display: 'inline'}}>
                               {reservedSeats[index].indexOf(3) >= 0 ?
                                    (
                                       <Checkbox
                                         checked
                                         iconStyle={{margin: '1px', fill: seats.indexOf(3) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                   )
                               :  (
                                       <Checkbox
                                         onCheck={this.props.selectSeat.bind(this,index , 3)}
                                         checked={seats.indexOf(3) >= 0}
                                         iconStyle={{margin: '1px'}}/>
                                   )
                               }
                             </TableRowColumn>
                             <TableRowColumn
                               style={{padding: 0, height: '30px', display: 'inline'}}>
                               {reservedSeats[index].indexOf(4) >= 0 ?
                                    (
                                       <Checkbox
                                         checked
                                         iconStyle={{margin: '1px', fill: seats.indexOf(4) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                   )
                               :    (
                                       <Checkbox
                                         onCheck={this.props.selectSeat.bind(this,index , 4)}
                                         checked={seats.indexOf(4) >= 0}
                                         iconStyle={{margin: '1px'}}/>
                                   )
                               }
                             </TableRowColumn>
                             <TableRowColumn
                               style={{padding: 0, height: '30px', display: 'inline'}}>
                               {reservedSeats[index].indexOf(5) >= 0 ?
                                    (
                                       <Checkbox
                                         checked
                                         iconStyle={{margin: '1px', fill: seats.indexOf(5) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                   )
                               :  (
                                       <Checkbox
                                         onCheck={this.props.selectSeat.bind(this,index , 5)}
                                         checked={seats.indexOf(5) >= 0}
                                         iconStyle={{margin: '1px'}}/>
                                   )
                               }
                             </TableRowColumn>
                             <TableRowColumn
                               style={{padding: 0, height: '30px', display: 'inline'}}>
                               {reservedSeats[index].indexOf(6) >= 0 ?
                                    (
                                       <Checkbox
                                         checked
                                         iconStyle={{margin: '1px', fill: seats.indexOf(6) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                   )
                               :  (
                                       <Checkbox
                                         onCheck={this.props.selectSeat.bind(this,index , 6)}
                                         checked={seats.indexOf(6) >= 0}
                                         iconStyle={{margin: '1px'}}/>
                                   )
                               }
                             </TableRowColumn>
                             <TableRowColumn
                               style={{padding: 0, height: '30px', display: 'inline'}}>
                               {reservedSeats[index].indexOf(7) >= 0 ?
                                    (
                                       <Checkbox
                                         checked
                                         iconStyle={{margin: '1px', fill: seats.indexOf(7) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                   )
                               :  (
                                       <Checkbox
                                         onCheck={this.props.selectSeat.bind(this,index , 7)}
                                         checked={seats.indexOf(7) >= 0}
                                         iconStyle={{margin: '1px'}}/>
                                   )
                               }
                             </TableRowColumn>
                             <TableRowColumn
                               style={{padding: 0, height: '30px', display: 'inline'}}>
                                    {reservedSeats[index].indexOf(8) >= 0 ?
                                         (
                                            <Checkbox
                                              checked
                                              iconStyle={{margin: '1px', fill: seats.indexOf(8) >= 0  ? 'rgb(0, 151, 167)' : 'red'}}/>
                                        )
                                    :  (
                                            <Checkbox
                                              onCheck={this.props.selectSeat.bind(this,index , 8)}
                                              checked={seats.indexOf(8) >= 0}
                                              iconStyle={{margin: '1px'}}/>
                                        )
                                    }
                             </TableRowColumn>
                         </TableRow>
                     )
                 })}


             </TableBody>
           </Table>
        </div>
    )
  }
}

export default Seats;
