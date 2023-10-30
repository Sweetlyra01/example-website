import ProductCard from "../components/productCard";
import productImg from "../assets/images/products-hero.png"

const Products = () => {
    return (
        <>
            <div className="productSec black">
            <div className="about-hero-sec">
                    <img src={productImg} alt='Program'/>
                   
                </div>
                <div className="about-overlay">
                    <span>Our Products</span>
                </div>
                <span className="center product-par">The following products will be available soon...</span>
                <div>
                    <ProductCard/>
                
                    
                </div>
                
            </div>
        </>
    )
};
export default Products;