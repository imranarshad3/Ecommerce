import "./Header.css";
import profileImage from "./Images/Profile.png";
import containerImage from "./Images/Container.png";
import iconImage from "./Images/Icon.png";

function Header() {
  return (
    <header className="header">
      <div className="announcement-bar">
        Free worldwide shipping over $100 — use code stitch20 for 20% off
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">STITCH</div>

          <div className="nav-links">
            <a href="/">New Arrivals</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/accessories">Accessories</a>
            <a href="/sale">Sale</a>
          </div>

          <div className="search-box">
            <span className="search-icon">⌕</span>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="nav-actions">
            <div className="wishlist">
              <img src={containerImage} alt="Wishlist" />
            </div>

            <div className="profile">
              <img src={profileImage} alt="Profile" />
            </div>

            <div className="cart">
              <img src={iconImage} alt="Shopping bag" />
              <span className="badge">3</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;