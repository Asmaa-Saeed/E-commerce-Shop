import { StarIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard = ({ id, name, price, rating, image }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the add to cart button
    addToCart({ id, name, price, image });
    setShowAlert(true);
  };

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div 
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
        onClick={handleProductClick}
      >
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-gray-800 font-medium mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-4 w-4 ${
                index < rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-teal-600 font-semibold">${price}</p>
          <button 
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center gap-2 cursor-pointer"
            onClick={handleAddToCart}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      <Alert 
        show={showAlert}
        message={`${name} successfully added to cart`}
        onClose={() => setShowAlert(false)}
      />
    </>
  );
};

export default ProductCard;