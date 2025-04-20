import React from 'react';
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
    <div className="w-[30%] p-4 mx-10 h-300 shadow-[0_0_10px_rgba(0,0,0,0.12)]">
      <h2 className="text-gray-500 text-xl font-semibold mb-4 text-center tracking-wider">Popular Post</h2>
      <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-4 gap-4  p-8">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-sm tracking-wide font-medium text-center">{post.title}</h3>
            <p className="text-xs mt-1.5 text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;