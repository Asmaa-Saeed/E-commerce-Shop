import { useState } from 'react';

interface FilterSectionProps {
  onCategoryChange: (category: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: "All" },
    { id: 'mens', name: "Men's Deals" },
    { id: 'ladies', name: "Ladies Deals" },
    { id: 'bag', name: 'Bag' },
    { id: 'cap', name: 'Cap' },
    { id: 'perfumes', name: 'Perfumes' },
    { id: 'boots', name: 'Boots' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] p-4 sm:p-6 lg:p-8">
        <h4 className="text-lg sm:text-xl font-semibold text-teal-600 tracking-wider w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0 sm:mr-4">
          Filter Products
        </h4>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600 cursor-pointer tracking-wide'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;