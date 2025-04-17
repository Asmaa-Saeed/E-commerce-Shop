
import blogBg from '../assets/Blog/blogBg.jpg';
const Blog = () => {
    return (
        <div>
        <div className=" relative w-full h-92 bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: `url(${blogBg})` }}>
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <h1 className="text-4xl font-bold text-black  z-10">Stay Updated With Our Latest News & Stories</h1>
        </div>
     </div>
    )
}

export default Blog;