import shopBg from '../assets/Shop/shopBg.jpg';
import FilterSection from '../Sections/shop-sections/FilterSection';
import ProductGrid from '../Sections/shop-sections/ProductGrid';

const Shop = () => {
    return (
        <div>
           <div className=" relative w-full h-92 bg-cover bg-center flex items-center justify-center"
           style={{backgroundImage: `url(${shopBg})` }}>
           <div className="absolute inset-0 bg-white opacity-10"></div>
           <h1 className="text-4xl font-bold text-black  z-10">Explore Our Amazing Products</h1>
           </div>
           <FilterSection/>
           <ProductGrid/>
        </div>
    )
}

export default Shop;