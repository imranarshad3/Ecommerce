import "./CategoryCard.css";

function CategoryCard({ image, name }) {
  return (
    <div className="category-card">
      <img
        className="category-card-image"
        src={image}
        alt={name}
      />

      <div className="category-card-content">
        <h3>{name}</h3>
        <span>Shop now →</span>
      </div>
    </div>
  );
}

export default CategoryCard;
