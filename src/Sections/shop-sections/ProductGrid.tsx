import { useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import { products } from '../../Data/products';
import FilterSection from './FilterSection';

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const productsPerPage = 10;

  // Filter products based on category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Calculate pagination for filtered products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col gap-6 px-2 sm:px-4 lg:px-8 max-w-[1440px] mx-auto'>
      {/* Filter Section */}
      <div className="w-full">
        <FilterSection onCategoryChange={handleCategoryChange} />
      </div>

      <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex flex-wrap justify-center mt-6 sm:mt-8 lg:mt-12 gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-7 h-7 sm:w-8 sm:h-8 cursor-pointer mb-20 text-sm sm:text-base rounded-full flex items-center justify-center border ${
                  currentPage === page
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'border-gray-300 hover:border-teal-600 hover:text-teal-600 cursor-pointer'
                } transition-colors duration-300`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;