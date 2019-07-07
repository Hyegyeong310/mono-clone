import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/mono-logo-horizontal.png';

function Navbar({ DummyText }) {
  return (
    <div className="nav" id="navbar">
      <div className="nav-content">
        <a href="/">
          <img src={logo} className="nav-logo" alt="logo" />
        </a>
        <ul className="nav-items">
          {DummyText.map(({ title }, index) => (
            <Menu key={index} title={title} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const Menu = ({ title, index }) => (
  <li className="nav-item">
    <Link
      activeClass="active"
      to={`section${index}`}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      {title}
    </Link>
  </li>
);

export default Navbar;
