import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../images/mono-logo-horizontal.png';

import { menu } from '../DummyText';

class Navbar extends Component {
  render() {
    return (
      <div className="nav" id="navbar">
        <div className="nav-content">
          <a href="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </a>
          <ul className="nav-items">
            {menu.map((item, index) => (
              <Menu key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const Menu = ({ item, index }) => (
  <li className="nav-item">
    <Link
      activeClass="active"
      to={`section${index}`}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {item}
    </Link>
  </li>
);

export default Navbar;
