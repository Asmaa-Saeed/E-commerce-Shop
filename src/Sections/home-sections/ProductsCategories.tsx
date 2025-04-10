import React from 'react';
import { categories } from '../../Data/CategoriesData';
import { Category } from '../../Types/Categories';

const ProductsCategories: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-2">Chose Any Products</h2>
      <p className="text-gray-600 mb-8">By Everything with Us</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat: Category, index: number) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover"
            />
            <div className="flex items-center justify-start px-4 py-3">
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
              <h3 className="text-lg font-medium text-gray-800">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsCategories;
