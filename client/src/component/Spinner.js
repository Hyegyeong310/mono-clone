import React from 'react';

function Spinner({ loading }) {
  return (
    <div className="spinner-wrapper">
      <div className={`spinner ${loading ? '' : 'spinner--hide'}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Spinner;
