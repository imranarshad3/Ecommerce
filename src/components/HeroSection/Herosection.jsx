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
              <img src={iconImage} alt="" />
              <span className='collection-text'>New Autumn Collection 2026</span>
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
              <button id="sp-collection">
                Shop Autumn Collection
              </button>

              <button id="w-lookbook">
                <img src={Playbtn} alt="" />
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
          />

          <div className="busycard">
            <img
              className="product-image"
              src={Cortimage}
              alt="Merino Wool Trench"
            />

            <div className="cardtext">
              <p>Merino Wool Trench</p>
              <p>$285.00</p>
            </div>

            <button id="buybtn">
              <img src={buyIcon} alt="Buy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
