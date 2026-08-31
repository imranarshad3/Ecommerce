import "./trendingnow.css";
import EssentialCrew from "./Images/EssentialCrewneck.png";
import CeramicTumbler from "./Images/CeramicTumbler.png";
import Slider from "../Slider/Slider";
import ProductCard from "../ProductCard/ProductCard";

function Trendingnow() {
  const products = [
    {
      name: "Essential Crewneck",
      image: EssentialCrew,
      price: 85.00,
      rating: 4.9
    },
    {
      name: "Ceramic Tumbler",
      image: CeramicTumbler,
      price: 35.00,
      oldPrice: 45.00,
      rating: 4.8
    },
    {
      name: "Essential Crewneck - Olive",
      image: EssentialCrew,
      price: 85.00,
      rating: 4.9
    },
    {
      name: "Ceramic Tumbler - White",
      image: CeramicTumbler,
      price: 35.00,
      rating: 4.8
    }
  ];

  return (
    <section className="trending-now">
      <div className="trending-header">
        <h2 className="trending-heading">Trending Now</h2>

        <div className="tabs">
          <button className="tabs-btn active">All</button>
          <button className="tabs-btn">New Arrivals</button>
          <button className="tabs-btn">Best Sellers</button>
          <button className="tabs-btn">Sale</button>
        </div>
      </div>

      <Slider>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            image={product.image}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Trendingnow;
