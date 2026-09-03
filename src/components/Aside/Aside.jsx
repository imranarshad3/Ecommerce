import React, { useState } from 'react'
import { X } from 'lucide-react'
import './Aside.css'

const CATEGORIES = ['Apparel', 'Accessories', 'Footwear', 'Electronics']
const SIZES = ['S', 'M', 'L']
const COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#ffffff' },
  { name: 'Blue', value: '#1d4ed8' },
]

function Aside() {
  const [selectedCategories, setSelectedCategories] = useState(['Apparel'])
  const [minPrice, setMinPrice] = useState(50)
  const [maxPrice, setMaxPrice] = useState(150)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Blue')

  const activeFilters = [
    ...selectedCategories.map((cat) => ({ id: `cat-${cat}`, type: 'category', value: cat, label: cat })),
    ...(minPrice || maxPrice ? [{ id: 'price-filter', type: 'price', label: `$${minPrice || 0} - $${maxPrice || 0}` }] : []),
    ...(selectedSize ? [{ id: `size-${selectedSize}`, type: 'size', value: selectedSize, label: selectedSize }] : []),
    ...(selectedColor ? [{ id: `color-${selectedColor}`, type: 'color', value: selectedColor, label: selectedColor }] : []),
  ]

  const handleRemoveFilter = (filter) => {
    if (filter.type === 'category') {
      setSelectedCategories((prev) => prev.filter((c) => c !== filter.value))
    } else if (filter.type === 'price') {
      setMinPrice('')
      setMaxPrice('')
    } else if (filter.type === 'size') {
      setSelectedSize('')
    } else if (filter.type === 'color') {
      setSelectedColor('')
    }
  }

  const toggleCategory = (name) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    )
  }

  return (
    <aside className="filter-aside">
      <h2 className="filter-title">Filters</h2>

      <div className="filter-chips">
        {activeFilters.map((filter) => (
          <span key={filter.id} className="chip">
            {filter.label}
            <button onClick={() => handleRemoveFilter(filter)} aria-label={`Remove ${filter.label}`}>
              <X size={12} />
            </button>
          </span>
        ))}
      </div>

      <div className="filter-section">
        <h3>Category</h3>
        <div className="checkbox-group">
          {CATEGORIES.map((category) => (
            <label key={category} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Price</h3>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-section">
        <h3>Size</h3>
        <div className="size-buttons">
          {SIZES.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Color</h3>
        <div className="color-buttons">
          {COLORS.map((color) => (
            <button
              key={color.name}
              className={`color-btn ${selectedColor === color.name ? 'active' : ''}`}
              style={{ '--color-val': color.value }}
              aria-label={color.name}
              onClick={() => setSelectedColor(selectedColor === color.name ? '' : color.name)}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Aside;
