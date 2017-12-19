import React from 'react'
import Head from 'next/head'
import style from '../styles';
import App from '../components/App';
import {API_HOST} from '../config';
import 'isomorphic-fetch';

class Home extends React.Component {
    static async getInitialProps() {
        let movieList = {};
        try{
            movieList = (await((await fetch(`${API_HOST}/movie`)).json())).movies;
        }
        finally{
            return {
                movieList
            }
        }
    }

    render() {
          return  (
              <div>
                  <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                  </Head>
                  <App movieList={this.props.movieList}/>
              </div>
          );
    }
}

export default Home;
