import './trendingnow.css';
import EssentialCrew from './Images/EssentialCrewneck.png';
import CeramicTumbler from './Images/CeramicTumbler.png';
import { useState } from 'react';
import { Target } from 'lucide-react';

function Trendingnow() {
  const [wish,setWish] = useState();
  const Products = [
    {
      name: 'Essential Crewneck',
      image: EssentialCrew,
      price: 85.00,
      rating: 4.9
    },
    {
      name: 'Ceramic Tumbler',
      image: CeramicTumbler,
      price: 35.00,
      oldPrice: 45.00,
      rating: 4.8
    },
    {
      name: 'Essential Crewneck - Olive',
      image: EssentialCrew,
      price: 85.00,
      rating: 4.9
    },
    {
      name: 'Ceramic Tumbler - White',
      image: CeramicTumbler,
      price: 35.00,
      rating: 4.8
    }
  ];

  function handleWish(){
    useState()
  }

  return (
    <section className="trending-now">
      <h2 className="trending-heading">Trending Now</h2>

      <div className="tabs">
        <button className="tabs-btn active">All</button>
        <button className="tabs-btn">New Arrivals</button>
        <button className="tabs-btn">Best Sellers</button>
        <button className="tabs-btn">Sale</button>
      </div>

      <div className="products-grid">
        {Products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-image-container">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />

              <button className="wishlist-btn" aria-label="Add to wishlist" onClick={handleWish()}>
                ♡
              </button>

              <div className="rating">
                <span>★</span>
                {product.rating}
              </div>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <div className="product-price">
                <span className={product.oldPrice ? 'sale-price' : 'price'}>
                  ${product.price.toFixed(2)}
                </span>

                {product.oldPrice && (
                  <span className="old-price">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trendingnow;
