import { StarIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard = ({ name, price, rating, image }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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
      <p className="text-teal-600 font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;