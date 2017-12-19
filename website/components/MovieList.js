import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from './common/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const ListStyle = {
    width: '100%',
    left: '50%',
    position: 'relative',
    transform: 'translateX(-50%)',
    overflow: 'auto',
    height: 'calc(100vh - 70px)',
    
}

const CardStyle = {
  width: '300px',
  margin: '15px',
  display: 'inline-block'
  
}

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.changeDialogState = this.changeDialogState.bind(this);

    this.state = {
      showDialog: false,
      selectedMovie: null
    }
  }

  changeDialogState(movie) {
    this.setState({
      ...this.state,
      showDialog: !this.state.showDialog,
      selectedMovie: movie
    })
  }


  render(){
    let { movieList } = this.props;

    return (
        <div style={ListStyle}>
          <div style={{width: '990px', margin: 'auto',  columnCount: '3', padding: '15px 0'}}>
            {movieList.map((movie, index) => {
                return (
                    <div key={index} style={CardStyle}>
                      <Card >
                        <CardMedia
                          overlay={<CardTitle title={movie.title} subtitle={movie.length} />}>
                          <img src={movie.photo_url} alt="" />
                        </CardMedia>
                        <CardTitle style={{paddingBottom: 0}} subtitle={"Szereplők: "}  />
                        <CardText style={{paddingBottom: 0, paddingTop: 0}}>
                          {movie.actors}
                        </CardText>
                        <CardTitle style={{paddingBottom: 0}} subtitle={"Műfaj: "}  />
                        <CardText style={{paddingTop: 0}}>
                          {movie.genre}
                        </CardText>
                        <CardText>
                          {movie.description}
                        </CardText>
                        <CardActions>
                          <RaisedButton label="Jegyrendelés" onClick={this.changeDialogState.bind(this, movie)} style={{ backgroundColor: "#fff", position: 'relative', transform: 'translateX(-50%)', left: '50%'}} primary={true}/>
                        </CardActions>
                      </Card>
                      </div>
                  )
              })}
              {this.state.showDialog && <Dialog show={this.state.showDialog} closeDialog={this.changeDialogState} movie={this.state.selectedMovie} />}
            </div>
        </div>
    )
  }
}

export default MovieList;
