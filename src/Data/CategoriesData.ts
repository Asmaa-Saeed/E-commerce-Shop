import { Category } from '../Types/Categories';

// Import images
import camera from '../assets/Categories/camera.png';
import shoes from '../assets/Categories/shoes.png';
import photography from '../assets/Categories/photography.png';
import fashion from '../assets/Categories/fashion.png';
import bags from '../assets/Categories/bags.png';
import home from '../assets/Categories/home.png';

export const categories: Category[] = [
  {
    title: 'DSLR Camera',
    image: camera,
  },
  {
    title: 'Shoes',
    image: shoes,
  },
  {
    title: 'Photography',
    image: photography,
  },
  {
    title: 'Fashion Set',
    image: fashion,
  },
  {
    title: 'Bags',
    image: bags,
  },
  {
    title: 'Home Decor',
    image: home,
  },
];
