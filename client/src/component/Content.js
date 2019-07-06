import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const menu = ['MISSION', 'PROBLEMS', 'SOLUTIONS', 'PARTNERS', 'CONTACT US'];

const styles = {
  block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,0.2)'
  },
  title: {
    textAlign: 'center',
    fontSize: 100,
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 100
  }
};

class Content extends Component {
  render() {
    return (
      <Fragment>
        {menu.map((item, key) => (
          <div style={styles.block} key={key}>
            <Fade top>
              <h1 style={styles.title}>{item}</h1>
            </Fade>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Content;
