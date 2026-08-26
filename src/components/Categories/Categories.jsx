import './Categories.css';
import AccessoriesImage from './Images/Accessories.png';
import ApparelImage from './Images/Apparel.png';
import ElectronicsImage from './Images/Electronics.png';
import FootwearImage from './Images/Footwear.png';

function Categories() {
  const categories = [
    {
      name: 'Apparel',
      image: ApparelImage
    },
    {
      name: 'Accessories',
      image: AccessoriesImage
    },
    {
      name: 'Electronics',
      image: ElectronicsImage
    },
    {
      name: 'Footwear',
      image: FootwearImage
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Categories</h2>
        <a href="/categories">View All</a>
      </div>

      <div className="categories-images">
        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <img src={category.image} alt={category.name} />

            <div className="category-overlay">
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
