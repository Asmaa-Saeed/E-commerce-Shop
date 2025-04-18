import Footer from "../Layouts/Footer";
// import Navbar from "../ Layouts / Navbar";
import HeroSection from "../Sections/home-sections/HeroSection";
import ProductSection from "../Sections/home-sections/Products";
import ProductsCategories from "../Sections/home-sections/ProductsCategories";
import RegistrationSection from "../Sections/home-sections/Resgisteration";

const Home = () => {
    return (
       <div>

          <HeroSection/>
          <ProductsCategories/>
          <ProductSection/>
          <RegistrationSection/>
          <Footer/>
       </div> 
    )
}  

export default Home;