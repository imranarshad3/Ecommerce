import React, { useState } from 'react'
import "./Productdetails.css"
import { 
  Heart, 
  Star, 
  ZoomIn, 
  Truck, 
  ShieldCheck, 
  Ruler, 
  Plus, 
  Minus 
} from 'lucide-react'

function Productdetails({ product }) {
  // Accordion state
  const [openSection, setOpenSection] = useState('description')

  // Fallback defaults if props are not passed
  const {
    name = "Classic Trench",
    price = "189.00",
    rating = 4.8,
    reviews = 124,
    description = "The quintessential outer layer. Tailored from water-resistant organic cotton gabardine, this trench features a classic double-breasted silhouette, storm flap, and adjustable belted waist.",
    images = [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800"
    ],
    colors = [
      { name: 'Sand', hex: '#E6D7C3' },
      { name: 'Charcoal', hex: '#4A4A4A' },
      { name: 'Navy', hex: '#2C3E50' }
    ],
    sizes = ['S', 'M', 'L', 'XL'],
    detailImage = "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800"
  } = product || {}

  // Selection states initialized with default values
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name || 'Sand')
  const [selectedSize, setSelectedSize] = useState('M')
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <section className="product-page">
      {/* Breadcrumbs */}
      <div className="bread-crumbs">
        <nav className="navbar">
          <a href="/" className="link">HOME</a>
          <span className="icon">&gt;</span>
          <a href="/outerwear" className="link">OUTERWEAR</a>
          <span className="icon">&gt;</span>
          <span className="link active">{name.toUpperCase()}</span>
        </nav>
      </div>

      {/* Main Grid: Gallery + Product Info */}
      <div className="product-container">
        {/* Left: Gallery */}
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

        {/* Right: Info Form */}
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

          {/* Color Selection */}
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

          {/* Actions */}
          <button className="add-to-cart-btn">
            Add to Bag - ${price}
          </button>

          {/* Badges */}
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

      {/* Accordion / Details Section */}
      <section className="details-section">
        <div className="details-grid">
          {/* Left Side: Overview */}
          <div className="details-left">
            <h3 className="details-heading">The Details</h3>
            <p className="details-subtext">
              Meticulously crafted for longevity and timeless style. Every seam and button tells a story of quality.
            </p>
            <div className="details-image-container">
              <img 
                src={detailImage} 
                alt="Trench coat fabric and button detail" 
                className="details-image" 
              />
            </div>
          </div>

          {/* Right Side: Accordion Menu */}
          <div className="details-right">
            {/* Accordion Item 1: Description */}
            <div className={`accordion-item ${openSection === 'description' ? 'open' : ''}`}>
              <button 
                className="accordion-header" 
                onClick={() => setOpenSection(openSection === 'description' ? null : 'description')}
              >
                <span>Description</span>
                {openSection === 'description' ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openSection === 'description' && (
                <div className="accordion-content">
                  <p>
                    Designed in London and crafted from a dense, water-resistant organic cotton gabardine, the Classic Trench is an indispensable part of any wardrobe. The silhouette is slightly relaxed, allowing for easy layering over suits or thick knits, while the belted waist allows you to cinch it for a sharper profile.
                  </p>
                  <ul className="details-list">
                    <li>Double-breasted closure</li>
                    <li>Signature epaulettes and storm flap</li>
                    <li>Adjustable belted waist with D-rings</li>
                    <li>Fully lined with a breathable viscose blend</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion Item 2: Materials & Care */}
            <div className={`accordion-item ${openSection === 'materials' ? 'open' : ''}`}>
              <button 
                className="accordion-header" 
                onClick={() => setOpenSection(openSection === 'materials' ? null : 'materials')}
              >
                <span>Materials & Care</span>
                {openSection === 'materials' ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openSection === 'materials' && (
                <div className="accordion-content">
                  <p>100% Organic Cotton Gabardine. Dry clean only. Iron on low heat if needed.</p>
                </div>
              )}
            </div>

            {/* Accordion Item 3: Shipping & Returns */}
            <div className={`accordion-item ${openSection === 'shipping' ? 'open' : ''}`}>
              <button 
                className="accordion-header" 
                onClick={() => setOpenSection(openSection === 'shipping' ? null : 'shipping')}
              >
                <span>Shipping & Returns</span>
                {openSection === 'shipping' ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openSection === 'shipping' && (
                <div className="accordion-content">
                  <p>Free standard shipping on orders over $150. Returns accepted within 30 days of receipt.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Productdetails
