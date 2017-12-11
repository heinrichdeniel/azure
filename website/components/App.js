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
const TabStyle = {
    background: 'transparent',
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
                        tabItemContainerStyle={TabStyle}
                        inkBarStyle={{
                            backgroundColor: '#eee'
                        }} >
                        <Tab
                            icon={<MovieIcon style={{color: '#eee'}}/>}
                            style={{color: '#eee'}}
                            label="Filmek"
                            value={0}>
                            <MovieList />
                        </Tab>
                        <Tab
                            icon={<ReservationIcon style={{color: '#eee'}}/>}
                            style={{color: '#eee'}}
                            label="Foglalások"
                            value={1}>
                        </Tab>
                    </Tabs>

                </MuiThemeProvider>
            </NoSSR>
        </div>
    )
  }
}

export default App;
