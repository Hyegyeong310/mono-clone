import React, { Component } from 'react';

class Footer extends Component {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return (
      <div className="footer">
        <div id="menu-top" onClick={this.scrollToTop}>
          <div
            id="menu-top_inside"
            style={{
              backgroundImage: `url(${
                process.env.REACT_APP_AWS_S3
              }images/menu_bottom_top_bg.png)`
            }}
          />
        </div>
        <ul className="icons">
          <li>
            <a
              href="https://fb.me/monolabs.io"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/monolabs1"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
        <p>&copy; mono labs corp. {new Date().getFullYear()}</p>
      </div>
    );
  }
}

export default Footer;
