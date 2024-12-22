'use client'
import { useState } from "react";

const categories = [
  { name: "Dairy", icon: "🧀" },
  { name: "Meat", icon: "🍖" },
  { name: "Fruits", icon: "🍎" },
  { name: "Drinks", icon: "🍷" },
  { name: "Sweets", icon: "🍬" },
];

const StaticCategory = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryClick = (categoryName) => {
      setSelectedCategory(categoryName);
      onSelectCategory(categoryName); // Propagate to parent
    };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-4 mt-2 ">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => handleCategoryClick(category.name)} // Handle click event
          className={`flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow-md p-2 cursor-pointer transition-all duration-300 ${
            selectedCategory === category.name
              ? "ring-4 ring-blue-500 bg-blue-100" // Highlight selected category
              : "hover:bg-gray-200" // Add hover effect for non-selected categories
          }`}
        >
          <span className="text-4xl">{category.icon}</span>
          <p className="text-center font-semibold text-black">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StaticCategory;
