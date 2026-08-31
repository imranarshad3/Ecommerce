import './Herosection.css';
import iconImage from './Images/Icon.png';
import Playbtn from './Images/playbtn.png';
import Cortimage from './Images/cortimage.png';
import buyIcon from './Images/buyicon.png';
import backHero from './Images/backhero.png';

function Herosection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <div className="heading">
            <button className="collection-tag">
              <img src={iconImage} alt="" width="14" height="14" />
              <span className="collection-text">New Autumn Collection 2026</span>
            </button>

            <h1>
              Elevate Your
              <br />
              Everyday
              <br />
              Essentials
            </h1>

            <p className="hero-description">
              Discover thoughtfully crafted pieces that blend sustainable
              materials with uncompromising quality. Designed for life in
              motion.
            </p>

            <div className="buttons">
              <button id="sp-collection">Shop Autumn Collection</button>

              <button id="w-lookbook">
                <img src={Playbtn} alt="" width="16" height="16" />
                <span>Watch Lookbook</span>
              </button>
            </div>
          </div>
        </div>

        <div className="heroimage">
          <img
            className="hero-main-image"
            src={backHero}
            alt="Autumn collection"
            width="700"
            height="490"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />

          <div className="busycard">
            <img
              className="product-image"
              src={Cortimage}
              alt="Merino Wool Trench"
              width="50"
              height="54"
            />

            <div className="cardtext">
              <p>Merino Wool Trench</p>
              <p>$285.00</p>
            </div>

            <button id="buybtn">
              <img src={buyIcon} alt="Buy" width="17" height="17" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
