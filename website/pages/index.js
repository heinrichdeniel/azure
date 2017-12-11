import React from 'react'
import Head from 'next/head'
import style from '../styles';
import App from '../components/App';

class Home extends React.Component {

  render() {
      return  (
          <div>
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <App/>
          </div>
      );
  }
}

export default Home;
