import React from 'react';
import { Search } from "lucide-react";
import IMage1 from '../../assets/Shop/PopularPosts/image01.jpg'
import IMage2 from '../../assets/Shop/PopularPosts/image2.jpg'
import IMage3 from '../../assets/Shop/PopularPosts/image3.jpg'
import IMage4 from '../../assets/Shop/PopularPosts/image4.jpg'
interface Post {
  image: string;
  title: string;
  date: string;
}
const PopularPosts: React.FC = () => {
  const posts: Post[] = [
    {
      image: IMage1,
      title: 'Poor People Campaign Our Resources',
      date: 'JUN 05, 2025',
    },
    {
      image: IMage2,
      title: 'Community Support Initiatives',
      date: 'JUL 12, 2025',
    },
    {
      image: IMage3,
      title: 'Education for All Program',
      date: 'AUG 20, 2025',
    },
    {
      image: IMage4,
      title: 'Health Awareness Campaign',
      date: 'SEP 15, 2025',
    },
  ];

  return (
    <div className="w-full lg:w-full p-2 sm:p-4">
      {/* Search Section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-center rounded-lg border border-gray-300 overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-2 sm:px-4 py-2 text-sm sm:text-base outline-none text-gray-700"
          />
          <button className="px-3 sm:px-4 py-2 hover:bg-gray-50 transition-colors">
            <Search className="text-gray-600 w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      </div>
      <div className='p-2 sm:p-4 shadow-[0_0_10px_rgba(0,0,0,0.12)]'>
        <h2 className="text-gray-500 text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center tracking-wider">Popular Post</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-3 sm:gap-6 p-2 sm:p-4">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-2 sm:p-4 w-full rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 sm:h-48 object-cover rounded-lg mb-2 sm:mb-3"
              />
              <h3 className="text-xs sm:text-sm tracking-wide font-medium text-center line-clamp-2">{post.title}</h3>
              <p className="text-[10px] sm:text-xs mt-1 sm:mt-1.5 text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;