import ProductCard from '../../Components/ProductCard';
import { products } from '../../Data/products';
import PopularPosts from './PopularPosts';

const ProductGrid = () => {
  return (
    <div className='flex'>
    <div className="max-w-7xl mx-auto px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <button
            key={page}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-colors duration-300"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    <PopularPosts/>
    </div>
  );
};

export default ProductGrid;