import React from 'react';

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      <span className="border" />
      <p>{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
