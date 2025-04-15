import Footer from "../Layouts/Footer";
// import Navbar from "../ Layouts / Navbar";
import HeroSection from "../Sections/home-sections/HeroSection";
import ProductSection from "../Sections/home-sections/Products";
import ProductsCategories from "../Sections/home-sections/ProductsCategories";

const Home = () => {
    return (
       <div>

          <HeroSection/>
          <ProductsCategories/>
          <ProductSection/>
          <Footer/>
       </div> 
    )
}  

export default Home;