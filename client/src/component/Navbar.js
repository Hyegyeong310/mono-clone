import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleLinkClick() {
    this.setState({ isOpen: false });
  }

  render() {
    const { data } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="nav" id="navbar">
        <div className="nav-content">
          <div className="logo">
            <a href="/">
              <img
                src={`${
                  process.env.REACT_APP_AWS_S3
                }images/mono-logo-horizontal.png`}
                className="nav-logo"
                alt="logo"
              />
            </a>
            <div id="mobile-btn" onClick={() => this.toggleMenu()}>
              <i className="fa fa-bars hanmurger" />
            </div>
          </div>
          <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <ul className="nav-items">
              {data.map(({ title }, index) => (
                <Menu
                  key={index}
                  title={title}
                  index={index}
                  onClick={() => {
                    this.handleLinkClick();
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const Menu = props => (
  <li className="nav-item">
    {props.title === 'blog' ? (
      <a
        href="http://monolabs.io/blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    ) : (
      <Link
        activeClass="active"
        to={`section${props.index}`}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        onClick={props.onClick}
      >
        {props.title}
      </Link>
    )}
  </li>
);

export default Navbar;
