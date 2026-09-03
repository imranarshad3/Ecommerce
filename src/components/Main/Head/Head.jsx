import React, { useState } from 'react'
import './Head.css'

function Head({ total_pro = 156 }) {
  const [sortBy, setSortBy] = useState('featured')

  return (
    <section className="head-bar">
      <div className="show-count">
        <p>Showing 1-12 of {total_pro}</p>
      </div>
      <div className="sort-container">
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>
    </section>
  )
}

export default Head
