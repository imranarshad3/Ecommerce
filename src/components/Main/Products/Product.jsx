import aero from "./Images/Aero.png";
import apex from "./Images/ApexChrono.png";
import trench from "./Images/classictrench.png";
import strato from "./Images/strato.png";
import ProductCard from "../../ProductCard/ProductCard";
import "./Product.css";

function Product() {
  const products = [
    {
      id: 1,
      image: trench,
      name: "Classic Trench",
      category: "Apparel",
      rating: 4.8,
      price: 189,
    },
    {
      id: 2,
      image: apex,
      name: "Apex Chrono",
      category: "Accessories",
      rating: 5,
      price: 299,
      oldPrice: 350,
    },
    {
      id: 3,
      image: strato,
      name: "Strato Knit",
      category: "Footwear",
      rating: 4.6,
      price: 125,
    },
    {
      id: 4,
      image: aero,
      name: "Aero Sunglasses",
      category: "Accessories",
      rating: 4.9,
      price: 100,
    },
    {
      id: 5,
      image: trench,
      name: "Classic Trench",
      category: "Apparel",
      rating: 4.8,
      price: 189,
    },
  ];

  return (
    <section className="products">
      <div className="product-main">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </section>
  );
}

export default Product;
