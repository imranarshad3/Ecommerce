import React from 'react';
import './Headmargin.css';

function Headmargin({ total_pro }) {
  return (
    <section className="head-margin">
      <div className="head-margin-container">
        <a href="/all" className="allcollection">All Collections</a>
        <span id="t-line">{total_pro} Products</span>
      </div>
    </section>
  );
}

export default Headmargin;

