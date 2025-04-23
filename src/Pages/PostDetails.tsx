import { useParams } from "react-router-dom";
import posts from "../Data/Blogs";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[400px]">
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
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
