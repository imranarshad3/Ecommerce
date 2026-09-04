import { useState } from "react";
import { Heart, Star } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ image, name, price, oldPrice, rating, category }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  const formattedPrice = !isNaN(Number(price)) ? Number(price).toFixed(2) : "0.00";
  const formattedOldPrice = oldPrice && !isNaN(Number(oldPrice)) ? Number(oldPrice).toFixed(2) : null;

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={image}
          alt={name || "Product image"}
          loading="lazy"
        />

        <button
          type="button"
          className={`wishlist-btn ${isLiked ? "liked" : ""}`}
          onClick={handleWishlist}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isLiked}
        >
          <Heart
            size={18}
            fill={isLiked ? "#e63946" : "none"}
            color={isLiked ? "#e63946" : "#222222"}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div className="product-info">
        <div className="category-div">
          <span className="category">{category}</span>
        </div>

        <h3 className="product-name" title={name}>
          {name}
        </h3>

        {rating && (
          <div className="rating-container">
            <Star
              size={13}
              fill="#f5a623"
              color="#f5a623"
              strokeWidth={0}
              className="star-icon"
            />
            <span className="rating-value">{rating}</span>
          </div>
        )}

        <div className="price-container">
          <div className="price-wrapper">
            <span className={`product-price ${formattedOldPrice ? "sale-price" : ""}`}>
              ${formattedPrice}
            </span>

            {formattedOldPrice && (
              <span className="product-old-price">
                ${formattedOldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
