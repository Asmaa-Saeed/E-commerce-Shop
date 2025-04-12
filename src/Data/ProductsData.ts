import { Product } from '../Types/Products';
import adidas from '../assets/Products/adidas-shoe.png';
import bag1 from '../assets/Products/bag-01.jpg';
import bag2 from '../assets/Products/bag-02.jpg';
import bag3 from '../assets/Products/bag-03.png';
import iPhone1 from '../assets/Products/phone-01.jpg'
import iPhone2 from '../assets/Products/phone-02.png'
import beauty1 from '../assets/Products/beauty-01.jpg'
import beauty2 from '../assets/Products/beauty-02.jpg'



const products: Product[]  = [
      {
        id: 1,
        category: 'Shoes',
        title: 'Adidas Runner',
        brand: 'Adidas',
        price: '$149.00',
        image: adidas,
        rating: 4.0,
      },
      {
        id: 2,
        category: 'Beauty',
        title: 'Luxury Perfume',
        brand: 'Chanel',
        price: '$120.00',
        image: beauty1,
        rating: 4.5,
      },
    
    {
      id: 3,
      category: 'Bags',
      title: 'Asthetic Bags',
      brand: 'D&J Bags',
      price: '$199.00',
      image: bag1,
      rating: 4.5,
    },
    {
      id: 4,
      category: 'Phones',
      title: 'iPhone 12',
      brand: 'Apple',
      price: '$199.00',
      image: iPhone2,
      rating: 3.5,
    },
    {
      id: 5,
      category: 'Beauty',
      title: 'Glow Up Face Cream',
      brand: 'L’Oréal',
      price: '$35.00',
      image: beauty2,
      rating: 4.3,
    },
    {
      id: 6,
      category: 'Bags',
      title: 'Nike Premier X',
      brand: 'Nike',
      price: '$199.00',
      image: bag3,
      rating: 4.5,
    },
  
    {
      id: 7,
      category: 'Phones',
      title: 'iPhone 12',
      brand: 'Apple',
      price: '$199.00',
      image: iPhone1,
      rating: 2.5,
    },
    {
      id: 8,
      category: 'Bags',
      title: 'Hiking Bag 15 Nh100',
      brand: 'Gucci',
      price: '$199.00',
      image: bag2,
      rating: 3.5,
    },
  
  ];
  
  export default products;
  