import { useState } from 'react';

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: "Men's & Ladies" },
    { id: 'mens', name: "Men's Deals" },
    { id: 'ladies', name: "Ladies Deals" },
    { id: 'bag', name: 'Bag' },
    { id: 'cap', name: 'Cap' },
    { id: 'perfumes', name: 'Perfumes' },
    { id: 'boots', name: 'Boots' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-8">
      <div className="flex flex-wrap items-center justify-center gap-4 bg-white rounded-lg shadow-sm p-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;