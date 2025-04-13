import { Category } from '../Types/Categories';

// Import images
import camera from '../assets/Categories/camera.jpg';
import shoes from '../assets/Categories/shoes2.jpg';
import photography from '../assets/Categories/photographer.jpg';
import fashion from '../assets/Categories/fashion.jpg';
import bags from '../assets/Categories/bags.jpg';
import home from '../assets/Categories/home.jpg';

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
