import { useState } from "react";
import { Heart, Star } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ image, name, price, oldPrice, rating, category }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleWishlist = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={image}
          alt={name}
        />

        <button
          type="button"
          className={`wishlist-btn ${isLiked ? "liked" : ""}`}
          onClick={handleWishlist}
          aria-label={
            isLiked ? "Remove from wishlist" : "Add to wishlist"
          }
          aria-pressed={isLiked}
        >
          <Heart
            size={30}
            fill={isLiked ? "#e63946" : "none"}
            color={isLiked ? "#e63946" : "#4a4d5c"}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div className="product-info">
        <span className="category">
          {category}
        </span>

        <h3 className="product-name">
          {name}
        </h3>

        <div className="rating">
          <Star
            size={23}
            fill="#f5a623"
            color="#f5a623"
            strokeWidth={1.5}
          />
          <span>{rating}</span>
        </div>

        <div className="product-prices">
          <span
            className={
              oldPrice
                ? "product-price sale-price"
                : "product-price"
            }
          >
            ${Number(price).toFixed(2)}
          </span>

          {oldPrice && (
            <span className="product-old-price">
              ${Number(oldPrice).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
