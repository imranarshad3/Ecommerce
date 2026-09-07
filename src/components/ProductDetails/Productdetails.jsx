import React, { useState } from 'react'
import "./Productdetails.css"
import { Heart, Star, ZoomIn, Truck, ShieldCheck, Ruler } from 'lucide-react'

function Productdetails({ product }) {
  const [selectedColor, setSelectedColor] = useState('Sand')
  const [selectedSize, setSelectedSize] = useState('M')
  const [mainImage, setMainImage] = useState(product?.images?.[0] || '')

  const {
    name = "Classic Trench",
    price = "189.00",
    rating = 4.8,
    reviews = 124,
    description = "The quintessential outer layer. Tailored from water-resistant organic cotton gabardine, this trench features a classic double-breasted silhouette, storm flap, and adjustable belted waist.",
    images = [],
    colors = [
      { name: 'Sand', hex: '#E6D7C3' },
      { name: 'Charcoal', hex: '#4A4A4A' },
      { name: 'Navy', hex: '#2C3E50' }
    ],
    sizes = ['S', 'M', 'L', 'XL']
  } = product || {}

  return (
    <section className="product-page">
      <div className="bread-crumbs">
        <nav className="navbar">
          <a href="/" className="link">HOME</a>
          <span className="icon">&gt;</span>
          <a href="/outerwear" className="link">OUTERWEAR</a>
          <span className="icon">&gt;</span>
          <span className="link active">{name.toUpperCase()}</span>
        </nav>
      </div>

      <div className="product-container">
        <div className="product-gallery">
          <div className="thumbnail-list">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                className={`thumb-btn ${mainImage === img ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
          <div className="main-image-container">
            <img src={mainImage || images[0]} alt={name} className="main-image" />
            <button className="zoom-btn" aria-label="Zoom image">
              <ZoomIn size={18} />
            </button>
          </div>
        </div>

        <div className="product-info">
          <div className="header-row">
            <h1 className="product-title">{name}</h1>
            <button className="wishlist-btn" aria-label="Add to wishlist">
              <Heart size={20} />
            </button>
          </div>

          <div className="price-rating-row">
            <span className="price">${price}</span>
            <div className="rating-block">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="rating-text">{rating} ({reviews} Reviews)</span>
            </div>
          </div>

          <p className="description">{description}</p>

          <div className="option-section">
            <label className="option-label">
              COLOR: <span className="selected-value">{selectedColor.toUpperCase()}</span>
            </label>
            <div className="color-swatches">
              {colors.map((c) => (
                <button
                  key={c.name}
                  style={{ backgroundColor: c.hex }}
                  className={`swatch-btn ${selectedColor === c.name ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(c.name)}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="option-section">
            <div className="size-header">
              <label className="option-label">SIZE</label>
              <button className="size-guide-btn">
                <Ruler size={14} />
                <span>Size Guide</span>
              </button>
            </div>
            <div className="size-grid">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart-btn">
            Add to Bag - ${price}
          </button>

          <div className="product-badges">
            <div className="badge-item">
              <Truck size={18} />
              <span>Free Shipping</span>
            </div>
            <div className="badge-item">
              <ShieldCheck size={18} />
              <span>100% Organic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productdetails
