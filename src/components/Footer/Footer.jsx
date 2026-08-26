import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>STITCH</h3>

          <p>
            Elevating everyday essentials with
            <br />
            sustainable materials and
            <br />
            uncompromising quality.
          </p>

          <div className="social-links">
            <a href="/" aria-label="Website">◉</a>
            <a href="/" aria-label="Instagram">◎</a>
            <a href="/" aria-label="Email">✉</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>SHOP</h3>

          <a href="/">New Arrivals</a>
          <a href="/">Best Sellers</a>
          <a href="/">Men's Collection</a>
          <a href="/">Women's Collection</a>
          <a href="/">Accessories</a>
          <a href="/" className="sale-link">Sale</a>
        </div>

        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>

          <a href="/">Contact Us</a>
          <a href="/">Shipping & Returns</a>
          <a href="/">Size Guide</a>
          <a href="/">FAQ</a>
          <a href="/">Track Order</a>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="/">About Us</a>
          <a href="/">Sustainability</a>
          <a href="/">Careers</a>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 STITCH. All rights reserved.</p>

        <span>▣ Secure Checkout</span>
      </div>
    </footer>
  );
}

export default Footer;