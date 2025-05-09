import shopBg from '../assets/Shop/shopBg.jpg';
import ProductGrid from '../Sections/shop-sections/ProductGrid';

const Shop = () => {
    return (
        <div>
           <div className="relative w-full h-92 bg-cover bg-center flex items-center justify-center"
           style={{backgroundImage: `url(${shopBg})` }}>
           <div className="absolute inset-0 bg-white opacity-10"></div>
           <h1 className="text-4xl text-center tracking-wide font-bold text-black z-10">Explore Our Amazing Products</h1>
           </div>
           <ProductGrid/>
        </div>
    )
}

export default Shop;