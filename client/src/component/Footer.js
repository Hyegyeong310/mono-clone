import React from 'react';

const Footer = () => (
  <div className="footer">
    <ul className="icons">
      <li>
        <a href="#none" className="icon">
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li>
        <a href="#none" className="icon">
          <i className="fab fa-twitter" />
        </a>
      </li>
    </ul>
    &copy; mono labs corp. {new Date().getFullYear()}
  </div>
);

export default Footer;
