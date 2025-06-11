export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  category: 'mens' | 'ladies' | 'bag' | 'cap' | 'perfumes' | 'boots';
}