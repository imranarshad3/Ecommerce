import "./Categories.css";
import Slider from "../Slider/Slider";
import CategoryCard from "../CategoryCard/CategoryCard";

import AccessoriesImage from "./Images/Accessories.png";
import ApparelImage from "./Images/Apparel.png";
import ElectronicsImage from "./Images/Electronics.png";
import FootwearImage from "./Images/Footwear.png";

function Categories() {
  const categories = [
    {
      name: "Apparel",
      image: ApparelImage
    },
    {
      name: "Accessories",
      image: AccessoriesImage
    },
    {
      name: "Electronics",
      image: ElectronicsImage
    },
    {
      name: "Footwear",
      image: FootwearImage
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Categories</h2>
        <a href="/categories">View All</a>
      </div>

      <Slider>
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Categories;
