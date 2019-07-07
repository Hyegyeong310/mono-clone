import React from 'react';

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <i className={icon} />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}

export default Card;
