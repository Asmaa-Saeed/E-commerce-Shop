import Footer from "../Layouts/Footer";
import HeroSection from "../Sections/home-sections/HeroSection";
import ProductSection from "../Sections/home-sections/Products";
import ProductsCategories from "../Sections/home-sections/ProductsCategories";

const Home = () => {
    return (
        <div>
           <HeroSection />
           <ProductsCategories/>
           <ProductSection/>
           {/* <CoverflowSwiper/> */}
           <Footer/>
       </div>

    )
}

export default Home;