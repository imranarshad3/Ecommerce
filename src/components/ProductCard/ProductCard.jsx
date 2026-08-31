import { Heart, Star } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ image, name, price, oldPrice, rating }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={image}
          alt={name}
        />

        <button
          className="wishlist-btn"
          aria-label="Add to wishlist"
        >
          <Heart />
        </button>

        <div className="rating">
          <Star />
          <span>{rating}</span>
        </div>
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <div className="product-prices">
          <span className={oldPrice ? "product-price sale-price" : "product-price"}>
            ${price.toFixed(2)}
          </span>

          {oldPrice && (
            <span className="product-old-price">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;