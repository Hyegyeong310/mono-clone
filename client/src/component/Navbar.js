import React from 'react';
import { Link } from 'react-scroll';

function Navbar({ data }) {
  return (
    <div className="nav" id="navbar">
      <div className="nav-content">
        <a href="/">
          <img
            src={`${
              process.env.REACT_APP_AWS_S3
            }images/mono-logo-horizontal.png`}
            className="nav-logo"
            alt="logo"
          />
        </a>
        <ul className="nav-items">
          {data.map(({ title }, index) => (
            <Menu key={index} title={title} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const Menu = ({ title, index }) => (
  <li className="nav-item">
    {title === 'blog' ? (
      <a
        href="http://monolabs.io/blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    ) : (
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
    )}
  </li>
);

export default Navbar;
