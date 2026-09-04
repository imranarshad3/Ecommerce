import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import "./Recentlyviewed.css";

function RecentlyViewed({ Recentlyviewed = [] }) {
  return (
    <section className="recently-view">
      <div className="main-div">
        <h2 className="section-title">Recently Viewed</h2>
        <div className="products">
          {Recentlyviewed.map((product) => (
            <ProductCard 
              key={product.id || product.name}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentlyViewed;
