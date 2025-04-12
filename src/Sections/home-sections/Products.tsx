import React, { useState } from 'react';
import Button from '../../Components/UI/Button';
import Card from '../../Components/UI/Card';
import CardContent from '../../Components/UI/CardContent';
import products from '../../Data/ProductsData';

const categories = ['All', 'Shoes', 'Bags', 'Phones', 'Beauty'];

const ProductSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-8">
      <div
        className="flex justify-between items-center border border-gray-300 py-6 px-4 mb-10 rounded-md shadow-md"
        style={{
          boxShadow: '0 0 5px 3px rgba(12, 178, 164, 0.57)', // Teal shadow on all four sides
        }}
      >
        <h2 className="text-2xl font-bold text-yellow-400">Our Product</h2>

        <div className="flex gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 bg-[#f2f2f2] rounded-sm p-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            {/* Image container with relative positioning */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              {/* Overlay for category and rating */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between  bg-[rgb(251_190_36_/_0.46)]  p-2">
                <div className="text-teal-700 font-semibold">
                  {product.category}
                </div>
                <div className="flex justify-center text-teal-700">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
              </div>
            </div>

            <CardContent>
              <h3 className="text-lg font-bold text-teal-600 mb-4">
                {product.title}
              </h3>
              <div className="flex justify-between border-t p-3 border-t-gray-300">
                <p className="text-gray-400 mb-1">{product.brand}</p>
                <p className="text-teal-600 font-semibold">{product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;