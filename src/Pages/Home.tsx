import Footer from "../Layouts/Footer";
import AboutUsSection from "../Sections/home-sections/AboutUsSection";
import CustomerSection from "../Sections/home-sections/CustomerSection";
import DownloadAppSection from "../Sections/home-sections/DownloadAppSection";
// import Navbar from "../ Layouts / Navbar";
import HeroSection from "../Sections/home-sections/HeroSection";
import PartnersSection from "../Sections/home-sections/PartnersSection";
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
          <CustomerSection/>
          <AboutUsSection/>
          <DownloadAppSection/>
          <PartnersSection/>
          <Footer/>
       </div> 
    )
}  

export default Home;