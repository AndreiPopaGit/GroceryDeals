import { useState, useEffect } from 'react';
import { fetchCategories } from '@/lib/supabaseClient'; // Adjust the path to your supabaseClient.js

const StaticCategory = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      if(data) {
        setCategories(data.map((category) => (
          {
            ...category,
            icon: getCategoryIcon(category.name),
          }
        ) ))
      }
    })
  }, []);
  

  const getCategoryIcon = (categoryName) => {
    const icons = {
      Lactate: '🧀',
      Carne: '🍖',
      Fructe: '🍎',
      Bauturi: '🍷',
      Dulciuri: '🍬',
    };
    return icons[categoryName] || '🛒'; // Default icon
  };

  const handleCategoryClick = (categoryId) => {

    const updatedCategory = selectedCategory.includes(categoryId)
      ? selectedCategory.filter((c) => c !== categoryId)
      : [...selectedCategory, categoryId];

    setSelectedCategory(updatedCategory);
    onSelectCategory(updatedCategory); // Propagate to parent
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-4 mt-2 ">
      {categories.length === 0 ? (
        <p>Loading categories...</p>
      ) : (
        categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow-md p-2 cursor-pointer transition-all duration-300 ${
              selectedCategory.includes(category.id)
                ? 'ring-4 ring-blue-500 bg-blue-100'
                : 'hover:bg-gray-200'
            }`}
          >
            <span className="text-4xl">{category.icon}</span>
            <p className="text-center font-semibold text-black">{category.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StaticCategory;
