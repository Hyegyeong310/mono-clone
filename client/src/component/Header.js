import React from 'react';
import logo from '../images/mono-logo-horizontal.png';

const menu = [
  'HOME',
  'MISSION',
  'PROBLEMS',
  'SOLUTIONS',
  'PARTNERS',
  'CONTACT US',
  'BLOG'
];

const Header = () => (
  <div className="header">
    <div className="logo">
      <a href="#none">
        <img src={logo} alt="mono-logo" />
      </a>
    </div>
    <ul className="nav">
      {menu.map((item, index) => (
        <Menu item={item} key={index} />
      ))}
    </ul>
  </div>
);

const Menu = ({ item }) => (
  <li>
    <a href="#none" className="tab_menu on">
      {item}
    </a>
  </li>
);

export default Header;
