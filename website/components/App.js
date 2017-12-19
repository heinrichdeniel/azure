import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MovieIcon from 'material-ui/svg-icons/image/movie-filter';
import ReservationIcon from 'material-ui/svg-icons/action/receipt';
import NoSSR from 'react-no-ssr';
import MovieList from './MovieList'
import Reservations from './Reservations'

const TabStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
}

const AppStyle = {
    background: 'url(/static/assets/img/background.png) no-repeat',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    backgroundSize: 'cover',
    left: '0',
    overflow: 'hidden',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };

  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render(){
    return (
        <div style={AppStyle}>
            <NoSSR>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                        style={TabStyle}
                        tabItemContainerStyle={{background: 'transparent'}}
                        inkBarStyle={{
                            backgroundColor: '#eee'
                        }} >
                        <Tab
                            icon={<MovieIcon style={{color: '#eee'}}/>}
                            style={{color: '#eee'}}
                            label="Filmek"
                            onClick={this.handleChange}
                            value={0}>
                            <MovieList movieList={this.props.movieList} />
                        </Tab>
                        <Tab
                            icon={<ReservationIcon style={{color: '#eee'}}/>}
                            style={{color: '#eee'}}
                            label="Foglalások"
                            onClick={this.handleChange}
                            value={1}>
                            <Reservations/>
                        </Tab>
                    </Tabs>

                </MuiThemeProvider>
            </NoSSR>
        </div>
    )
  }
}

export default App;
