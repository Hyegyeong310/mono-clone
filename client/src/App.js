import React, { Component } from 'react';
import './assets/scss/main.scss';
import './App.css';

import axios from 'axios';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Spinner from './component/Spinner';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Home from './sections/Home';
import Mission from './sections/Mission';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Partner from './sections/Partner';
import Contact from './sections/Contact';

class App extends Component {
  state = { data: [], loading: true };

  componentDidMount() {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    };

    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/api/data`, config)
      .then(response => {
        this.setState(() => ({ data: response.data, loading: false }));
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <Spinner loading={loading} />;
    } else {
      return (
        <div className={`body`}>
          <Helmet>
            <title>Monolabs</title>
            <meta name="description" content="" />
          </Helmet>

          <Home />

          <div id="wrapper">
            <Navbar data={data} />
            <main>
              <Mission item={data[1]} />
              <Problem item={data[2]} />
              <Solution item={data[3]} />
              <Partner item={data[4]} />
              <Contact item={data[5]} />
            </main>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

App.propTypes = {
  route: PropTypes.object
};

export default App;
