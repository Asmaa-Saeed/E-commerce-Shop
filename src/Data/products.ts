import { Product } from '../Types/ProductTypes';
import LadiesImg01 from '../assets/Shop/Data/womens/woman01.jpg'
import LadiesImg02 from '../assets/Shop/Data/womens/woman02.jpg'
import LadiesImg03 from '../assets/Shop/Data/womens/woman03.jpg'
import LadiesImg04 from '../assets/Shop/Data/womens/woman04.jpg'
// import {LadiesImg05} from '../assets/Shop/Data/womens/woman05.jpg'
import LadiesImg06 from '../assets/Shop/Data/womens/woman06.jpg'
import LadiesImg07 from '../assets/Shop/Data/womens/woman07.jpg'
// import {LadiesImg08} from '../assets/Shop/Data/womens/woman08.jpg'
import LadiesImg09 from '../assets/Shop/Data/womens/woman09.jpg'
import LadiesImg10 from '../assets/Shop/Data/womens/woman10.jpg'

// import boots images
import BootsImg01 from '../assets/Shop/Data/Boots/boat-01.jpg'
import BootsImg02 from '../assets/Shop/Data/Boots/boat02.jpg'
import BootsImg03 from '../assets/Shop/Data/Boots/boat03.jpg'
import BootsImg04 from '../assets/Shop/Data/Boots/boat04.jpg'
import BootsImg05 from '../assets/Shop/Data/Boots/boat05.jpg'
import BootsImg06 from '../assets/Shop/Data/Boots/boat06.jpg'

// import caps images
import CapsImg01 from '../assets/Shop/Data/Caps/cap01.jpg'
import CapsImg02 from '../assets/Shop/Data/Caps/cap02.jpg'
import CapsImg03 from '../assets/Shop/Data/Caps/cap03.jpg'
import CapsImg04 from '../assets/Shop/Data/Caps/cap04.jpg'
import CapsImg05 from '../assets/Shop/Data/Caps/cap05.jpg'
import CapsImg06 from '../assets/Shop/Data/Caps/cap06.jpg'
import CapsImg07 from '../assets/Shop/Data/Caps/cap07.jpg'
// import CapsImg08 from '../assets/Shop/Data/Caps/cap08.jpg'

// import perfume images
import PerfumesImg01 from '../assets/Shop/Data/Perfume/perfume01.jpg'
import PerfumesImg02 from '../assets/Shop/Data/Perfume/perfume02.jpg'
import PerfumesImg03 from '../assets/Shop/Data/Perfume/perfume03.jpg'
import PerfumesImg04 from '../assets/Shop/Data/Perfume/perfume04.jpg'
import PerfumesImg05 from '../assets/Shop/Data/Perfume/perfume05.jpg'

// import bags images
import BagsImg01 from '../assets/Shop/Data/Bags/bag01.jpg'
import BagsImg02 from '../assets/Shop/Data/Bags/bag08.jpg'
import BagsImg03 from '../assets/Shop/Data/Bags/bag03.jpg'
import BagsImg04 from '../assets/Shop/Data/Bags/bag04.jpg'
import BagsImg05 from '../assets/Shop/Data/Bags/bag05.jpg'
import BagsImg06 from '../assets/Shop/Data/Bags/bag06.jpg'
import BagsImg07 from '../assets/Shop/Data/Bags/bag07.jpg'
// import BagsImg08 from '../assets/Shop/Data/Bags/bag08.jpg'
// import BagsImg09 from '../assets/Shop/Data/Bags/bag09.jpg'
// import BagsImg10 from '../assets/Shop/Data/Bags/bag10.jpg'

// import mens images
import MensImg01 from '../assets/Shop/Data/Mens/man01.jpg'
import MensImg02 from '../assets/Shop/Data/Mens/man02.jpg'
import MensImg03 from '../assets/Shop/Data/Mens/man03.jpg'
import MensImg04 from '../assets/Shop/Data/Mens/man04.jpg'
import MensImg05 from '../assets/Shop/Data/Mens/man05.jpg'
import MensImg06 from '../assets/Shop/Data/Mens/man06.jpg'
import MensImg07 from '../assets/Shop/Data/Mens/man07.jpg'
import MensImg08 from '../assets/Shop/Data/Mens/man15.jpg'
import MensImg09 from '../assets/Shop/Data/Mens/man14.jpg'
import MensImg10 from '../assets/Shop/Data/Mens/man10.jpg'
import MensImg11 from '../assets/Shop/Data/Mens/man11.jpg'
import MensImg12 from '../assets/Shop/Data/Mens/man12.jpg'
import MensImg13 from '../assets/Shop/Data/Mens/man13.jpg'
// import MensImg14 from '../assets/Shop/Data/Mens/man14.jpg'
// import MensImg15 from '../assets/Shop/Data/Mens/man15.jpg'
// import MensImg16 from '../assets/Shop/Data/Mens/man16.jpg'

export const products: Product[] = [
  {
    id: 1,
    name: 'US TRAINSHOT 29 SHOES',
    price: 245,
    rating: 4,
    image: MensImg01,
    category: 'mens',
    description: 'Premium quality training shoes with enhanced comfort and durability. Perfect for both casual wear and athletic activities.'
  },
  {
    id: 2,
    name: 'LUNAR MEN PEAK-25 TRAINSHOT PRO',
    price: 235,
    rating: 5,
    image: MensImg10,
    category: 'mens',
    description: 'Professional-grade training shoes with advanced cushioning technology. Designed for maximum performance and comfort.'
  },
  {
    id: 3,
    name: 'SUPERNOVUS SHOES',
    price: 255,
    rating: 4,
    image: MensImg02,
    category: 'mens',
    description: 'Innovative design with superior support and flexibility. Ideal for runners and athletes seeking peak performance.'
  },
  {
    id: 4,
    name: 'LITE RACER ADAPT 3.0 SHOES',
    price: 220,
    rating: 5,
    image: MensImg03,
    category: 'mens',
    description: 'Lightweight racing shoes with adaptive fit technology. Perfect for speed training and competitive running.'
  },
  {
    id: 5,
    name: 'SPORTS SHOES',
    price: 267,
    rating: 4,
    image: MensImg04,
    category: 'mens',
    description: 'Versatile sports shoes suitable for various activities. Features excellent traction and breathable design.'
  },
  {
    id: 6,
    name: 'KAPTUR 2.0 BRESS',
    price: 132,
    rating: 5,
    image: LadiesImg01,
    category: 'ladies',
    description: 'Stylish and comfortable dress shoes for women. Perfect for both casual and formal occasions.'
  },
  {
    id: 7,
    name: 'RETRO PULSE SHOES',
    price: 165,
    rating: 4,
    image: MensImg05,
    category: 'mens',
    description: 'Classic retro design with modern comfort features. A perfect blend of style and functionality.'
  },
  {
    id: 8,
    name: 'ZX 4K BOOST SHOES',
    price: 175,
    rating: 5,
    image: MensImg06,
    category: 'mens',
    description: 'High-performance shoes with advanced boost technology. Provides exceptional energy return and comfort.'
  },
  {
    id: 9,
    name: 'NMD_R1 V2 SHOES',
    price: 245,
    rating: 4,
    image: MensImg07,
    category: 'mens',
    description: 'Modern urban shoes with responsive cushioning. Perfect for city life and casual wear.'
  },
  {
    id: 10,
    name: 'NMD_R1 PRIMEBLUE DRESS',
    price: 147,
    rating: 5,
    image: LadiesImg02,
    category: 'ladies',
    description: 'Elegant dress with sustainable materials. Combines style with environmental consciousness.'
  },
  {
    id: 11,
    name: 'URBAN BACKPACK PRO',
    price: 89,
    rating: 4,
    image: BagsImg01,
    category: 'bag',
    description: 'Spacious and durable backpack with multiple compartments. Perfect for work, travel, or daily use.'
  },
  {
    id: 12,
    name: 'SPORTS DUFFLE BAG',
    price: 75,
    rating: 5,
    image: BagsImg02,
    category: 'bag',
    description: 'Large capacity duffle bag with water-resistant material. Ideal for sports equipment and travel.'
  },
  {
    id: 13,
    name: 'CLASSIC SNAPBACK CAP',
    price: 35,
    rating: 4,
    image: CapsImg01,
    category: 'cap',
    description: 'Timeless snapback design with adjustable fit. Perfect for casual everyday wear.'
  },
  {
    id: 14,
    name: 'PREMIUM FITTED CAP',
    price: 45,
    rating: 5,
    image: CapsImg02,
    category: 'cap',
    description: 'High-quality fitted cap with comfortable material. Great for sports and casual wear.'
  },
  {
    id: 15,
    name: 'OCEAN BREEZE PERFUME',
    price: 120,
    rating: 5,
    image: PerfumesImg01,
    category: 'perfumes',
    description: 'Fresh and invigorating scent inspired by ocean waves. Perfect for daily wear.'
  },
  {
    id: 16,
    name: 'MIDNIGHT ESSENCE',
    price: 150,
    rating: 4,
    image: PerfumesImg02,
    category: 'perfumes',
    description: 'Rich and mysterious fragrance for special occasions. Long-lasting scent with unique character.'
  },
  {
    id: 17,
    name: 'LEATHER COMBAT BOOTS',
    price: 189,
    rating: 5,
    image: BootsImg01,
    category: 'boots',
    description: 'Durable leather combat boots with excellent grip. Perfect for outdoor activities and casual wear.'
  },
  {
    id: 18,
    name: 'HIKING PRO BOOTS',
    price: 210,
    rating: 4,
    image: BootsImg02,
    category: 'boots',
    description: 'Professional hiking boots with waterproof technology. Designed for challenging terrains.'
  },
  {
    id: 19,
    name: 'TRACK PANTS PRO',
    price: 110,
    rating: 5,
    image: MensImg08,
    category: 'mens',
    description: 'Comfortable and stylish track pants with moisture-wicking fabric. Perfect for workouts and casual wear.'
  },
  {
    id: 20,
    name: 'ATHLETIC TRACK PANTS',
    price: 95,
    rating: 4,
    image: MensImg09,
    category: 'mens',
    description: 'Lightweight athletic pants with stretch fabric. Ideal for sports and everyday activities.'
  },
  {
    id: 21,
    name: 'ELITE RUNNING SHOES',
    price: 189,
    rating: 5,
    image: MensImg10,
    category: 'mens',
    description: 'High-performance running shoes with advanced cushioning. Designed for serious runners.'
  },
  {
    id: 22,
    name: 'FLORAL SUMMER DRESS',
    price: 79,
    rating: 4,
    image: LadiesImg03,
    category: 'ladies',
    description: 'Beautiful floral print dress perfect for summer. Light and comfortable with elegant design.'
  },
  {
    id: 23,
    name: 'LEATHER TOTE BAG',
    price: 159,
    rating: 5,
    image: BagsImg03,
    category: 'bag',
    description: 'Stylish leather tote bag with spacious interior. Perfect for work and shopping.'
  },
  {
    id: 24,
    name: 'VINTAGE BASEBALL CAP',
    price: 29,
    rating: 4,
    image: CapsImg03,
    category: 'cap'
  },
  {
    id: 25,
    name: 'ROSE GARDEN PERFUME',
    price: 135,
    rating: 5,
    image: PerfumesImg03,
    category: 'perfumes'
  },
  {
    id: 26,
    name: 'WINTER COMBAT BOOTS',
    price: 225,
    rating: 4,
    image: BootsImg03,
    category: 'boots'
  },
  {
    id: 27,
    name: 'EVENING COCKTAIL DRESS',
    price: 165,
    rating: 5,
    image: LadiesImg04,
    category: 'ladies'
  },
  {
    id: 28,
    name: 'CANVAS BACKPACK',
    price: 65,
    rating: 4,
    image: BagsImg04,
    category: 'bag'
  },
  {
    id: 29,
    name: 'MESH RUNNING CAP',
    price: 32,
    rating: 5,
    image: CapsImg04,
    category: 'cap'
  },
  {
    id: 30,
    name: 'CITRUS BURST PERFUME',
    price: 110,
    rating: 4,
    image: PerfumesImg04,
    category: 'perfumes'
  },
  {
    id: 31,
    name: 'DESERT TACTICAL BOOTS',
    price: 195,
    rating: 5,
    image: BootsImg04,
    category: 'boots'
  },
  {
    id: 32,
    name: 'CASUAL MAXI DRESS',
    price: 85,
    rating: 4,
    image: PerfumesImg05,
    category: 'perfumes'
  },
  {
    id: 33,
    name: 'TRAVEL DUFFEL BAG',
    price: 95,
    rating: 5,
    image: BagsImg05,
    category: 'bag'
  },
  {
    id: 34,
    name: 'SPORTS VISOR CAP',
    price: 28,
    rating: 4,
    image: CapsImg05,
    category: 'cap'
  },
  {
    id: 35,
    name: 'VANILLA DREAMS PERFUME',
    price: 145,
    rating: 5,
    image: PerfumesImg05,
    category: 'perfumes'
  },
  {
    id: 36,
    name: 'MOUNTAIN TREK BOOTS',
    price: 235,
    rating: 4,
    image: BootsImg05,
    category: 'boots'
  },
  {
    id: 37,
    name: 'BUSINESS CASUAL DRESS',
    price: 125,
    rating: 5,
    image: LadiesImg06,
    category: 'ladies'
  },
  {
    id: 38,
    name: 'LAPTOP BACKPACK PRO',
    price: 115,
    rating: 4,
    image: BagsImg06,
    category: 'bag'
  },
  {
    id: 39,
    name: 'WINTER BEANIE CAP',
    price: 25,
    rating: 5,
    image: CapsImg06,
    category: 'cap'
  },
  {
    id: 40,
    name: 'MIDNIGHT MUSK PERFUME',
    price: 155,
    rating: 4,
    image: MensImg11,
    category: 'mens'
  },
  {
    id: 41,
    name: 'URBAN STREET BOOTS',
    price: 175,
    rating: 5,
    image: MensImg12,
    category: 'mens'
  },
  {
    id: 42,
    name: 'SUMMER WRAP DRESS',
    price: 95,
    rating: 4,
    image: MensImg13,
    category: 'mens'
  },
  {
    id: 43,
    name: 'WEEKEND TOTE BAG',
    price: 85,
    rating: 5,
    image: BagsImg07,
    category: 'bag'
  },
  {
    id: 44,
    name: 'TRUCKER MESH CAP',
    price: 30,
    rating: 4,
    image: CapsImg07,
    category: 'cap'
  },
  {
    id: 45,
    name: 'SPRING BLOSSOM PERFUME',
    price: 130,
    rating: 5,
    image: MensImg08,
    category: 'mens'
  },
  {
    id: 46,
    name: 'WATERPROOF HIKING BOOTS',
    price: 215,
    rating: 4,
    image: BootsImg06,
    category: 'boots'
  },
  {
    id: 47,
    name: 'PARTY SEQUIN DRESS',
    price: 155,
    rating: 5,
    image: LadiesImg07,
    category: 'ladies'
  },
  {
    id: 48,
    name: 'GYM SPORTS DRESS',
    price: 70,
    rating: 4,
    image: LadiesImg04,
    category: 'ladies'
  },
  {
    id: 49,
    name: 'BUCKET SUN HAT',
    price: 35,
    rating: 5,
    image: LadiesImg10,
    category: 'ladies'
  },
  {
    id: 50,
    name: 'SUMMER BREEZE DRESS',
    price: 125,
    rating: 4,
    image: LadiesImg09,
    category: 'ladies'
  }
];