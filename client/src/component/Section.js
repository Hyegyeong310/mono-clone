import React from 'react';

function Section({ title, subtitle, id }) {
  return (
    <div className="section">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <span className="border" />
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Section;
