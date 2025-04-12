import HeroSection from "../Sections/home-sections/HeroSection";
import ProductSection from "../Sections/home-sections/Products";
import ProductsCategories from "../Sections/home-sections/ProductsCategories";

const Home = () => {
    return (
        <div>
           <HeroSection />
           <ProductsCategories/>
           <ProductSection/>
       </div>

    )
}

export default Home;