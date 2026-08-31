import "./Header.css";
import { useState } from "react";
import profileImage from "./Images/Profile.png";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="announcement-bar">
        <p>Free worldwide shipping over $100 — use code stitch20 for 20% off</p>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span>STITCH</span>
          </div>

          <div className="nav-links">
            <a href="/">New Arrivals</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/accessories">Accessories</a>
            <a href="/sale">Sale</a>
          </div>

          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="nav-actions">
            <button className="wishlist" aria-label="Wishlist">
              <Heart className="nav-icon" />
              <span className="wishlist-badge">2</span>
            </button>

            <button className="profile" aria-label="Profile">
              <img src={profileImage} alt="Profile" />
            </button>

            <button className="cart" aria-label="Shopping cart">
              <ShoppingBag className="nav-icon" />
              <span className="cart-badge">3</span>
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="menu-icon" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`offcanvas-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`offcanvas ${menuOpen ? "active" : ""}`}>
        <div className="offcanvas-header">
          <div className="logo">
            <span>STITCH</span>
          </div>

          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <div className="offcanvas-links">
          <a href="/" onClick={closeMenu}>New Arrivals</a>
          <a href="/men" onClick={closeMenu}>Men</a>
          <a href="/women" onClick={closeMenu}>Women</a>
          <a href="/accessories" onClick={closeMenu}>Accessories</a>
          <a href="/sale" onClick={closeMenu}>Sale</a>
        </div>
      </aside>
    </header>
  );
}

export default Header;
