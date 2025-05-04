import { useParams } from "react-router-dom";
import posts from "../Data/Blogs";
import Footer from "../Layouts/Footer";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  if (!post) {
    return <div>Post not found</div>;
  }

  // Get related posts (excluding current post)
  const relatedPosts = posts
    .filter((p) => p.id !== Number(id))
    .slice(0, 3);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full h-auto min-h-[800px]">
          <div className="relative h-[500px]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl text-teal-600 tracking-wider font-semibold mb-4">
              {post.title}
            </h2>
            <div className="flex items-center gap-6 mb-6 text-gray-600">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h8V4H6z" />
                </svg>
                {post.date}
              </span>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
            </div>

            {/* Social Sharing Section */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share this post</h3>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Share
                  </span>
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Tweet
                  </span>
                </button>
              </div>
            </div>
          </div>
      

        {/* Quote Section */}
        {/* <div className="bg-teal-400 w-full h-60 shadow-lg mt-10 rounded-lg p-4">
          <div className="prose max-w-none">
            <p className="text-gray-100 leading-relaxed mb-4 text-2xl">{post.Quetes}</p>
          </div> 
        </div> */}

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 ml-8 mb-3">Comments</h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <textarea 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent
                rows='4'"
                placeholder="Write a comment..."
              ></textarea>
              <button className="mt-3 mb-8 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
                Post Comment
              </button>
            </div>
            <div className="space-y-6">
              {/* Sample comments */}
              <div className="border-b pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">John Doe</h4>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                </div>
                <p className="text-gray-700">Great article! Really enjoyed reading this.</p>
              </div>
              <div className="border-b pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>
                </div>
                <p className="text-gray-700">Thanks for sharing these insights!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
        {/* Related Posts Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="h-[350px]">
                <Link to={`/${String(relatedPost.id)}`} className="block h-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col border border-gray-200">
                    <div className="h-[150px] relative">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                      <h4 className="text-lg font-semibold text-teal-600 mb-2 line-clamp-2">{relatedPost.title}</h4>
                      <p className="text-gray-600 text-sm">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        </div>
      <Footer/>
    </div>
  );
};

export default PostDetails;
