import React from 'react';
import { categories } from '../../Data/CategoriesData';
import { Category } from '../../Types/Categories';

const ProductsCategories: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-white text-center">
      <h2 className="text-2xl text-yellow-300 bg-teal-700 mx-auto rounded-sm px-35 py-1.5 max-w-fit  mb-4 tracking-wider">Choose Any Product</h2>
      <p className="text-gray-500 mb-16 tracking-wider">Buy Everything with Us</p>
      <div className="grid grid-cols-1 my-6 sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-6xl mx-auto">
        {categories.map((cat: Category, index: number) => (
          <div key={index} className="bg-white rounded-sm overflow-hidden duration-300 hover:ring-amber-600 shadow-[0_0_10px_rgba(0,0,0,0.2)]  hover:-translate-y-2  transition-all cursor-pointer">
            <div className="relative">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center justify-start">
                  <div className="bg-yellow-400 p-2 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 4h16v16H4z" />
                    </svg>
                  </div>
                  <h3 className="text-shadow-amber-200 text-yellow-400 tracking-wide">{cat.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCategories;
