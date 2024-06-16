import React from 'react';
import './CategorySection.css';

const categories = [
  { name: 'Grocery', icon: '🛒' },
  { name: 'Home', icon: '🏠' },
  { name: 'Patio & Garden', icon: '🌳' },
  { name: 'Fashion', icon: '👗' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Baby', icon: '🍼' },
  { name: 'Toys', icon: '🧸' },
  { name: 'Health & wellness', icon: '💊' },
  { name: 'Personal Care', icon: '🧴' },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      {categories.map((category) => (
        <div key={category.name} className="category">
          <div className="icon">{category.icon}</div>
          <div className="name">{category.name}</div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
