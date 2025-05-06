import posts from "../Data/Blogs";
import Footer from "../Layouts/Footer";
import { Link, NavLink } from "react-router-dom";
import PopularPosts from "../Sections/shop-sections/PopularPosts";
import blogBg from "../assets/Blog/blogBg.jpg";

const Blog = () => {
  return (
    <div>
      <div
        className="relative w-full h-92 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 bg-white opacity-5"></div>
        <div className="z-10">
          {/* <h1 className="text-4xl font-bold text-gray-200 text-center text-shadow-blue-100 text-shadow tracking-wide">Our Blog</h1> */}
          <h1 className="text-4xl font-bold text-gray-200 text-center mt-4 text-shadow-blue-100 text-shadow tracking-wide">
            Stay Updated With Our Latest News & Stories
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="container max-w-[95%] mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out transform hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-gray-50"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[280px] min-h-[280px] p-1.5 rounded-lg object-cover"
                  />
                  <div className="p-4">
                    <NavLink to={`/postDetails/${post.id}`}>
                      <h2 className="text-lg font-bold text-gray-800 mb-3 tracking-wide hover:text-red-500 transition duration-200 cursor-pointer">
                        {post.title}
                      </h2>
                    </NavLink>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-teal-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                        {post.author}
                      </span>
                      <span className="flex items-center ml-4">
                        <svg
                          className="w-4 h-4 mr-1 text-teal-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h8V4H6zm2 2h4v2H8V6zm0 4h4v2H8v-2zm0 4h4v2H8v-2z" />
                        </svg>
                        {post.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-md tracking-wide mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-1 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                          {post.likes}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-1 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" />
                          </svg>
                          {post.comments}
                        </span>
                      </div>
                      <Link
                        to={`/postDetails/${post.id}`}
                        className="flex items-center text-red-500 hover:underline"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Popular Posts Sidebar */}
          <div className="w-full lg:w-1/4 lg:min-w-[300px]">
            <PopularPosts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
