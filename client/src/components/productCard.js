import product1 from "../assets/images/product1.jpg"
import product2 from "../assets/images/product2.jpg"
import product3 from "../assets/images/product3.jpg"
import product4 from "../assets/images/product4.jpg"
import product5 from "../assets/images/product5.jpg"
import product6 from "../assets/images/product6.jpg"
import product7 from "../assets/images/product7.jpg"
import product8 from "../assets/images/product8.jpg"
import product9 from "../assets/images/product9.jpg"
import product10 from "../assets/images/product10.jpg"
import product11 from "../assets/images/product11.jpg"
import product12 from "../assets/images/product12.jpg"
import product13 from "../assets/images/product13.jpg"
import product14 from "../assets/images/product14.jpg"
import product15 from "../assets/images/product15.jpg"

const ProductCard = () => {
    return (
        <>
            <div className="productContainer wrap">
                <div className="productCard">
                    <img src={product1} alt="product1" className="productImg"/>
                    <span>Thumbler</span>
                    <button className="adtocart-btn">Add to Cart</button>

                </div>
                <div className="productCard">
                    <img src={product2} alt="product1" className="productImg"/>
                    <span>Thumbler</span>
                    <button className="adtocart-btn">Add to Cart</button>

                </div>
                <div className="productCard">
                    <img src={product3} alt="product1" className="productImg"/>
                    <span>Protein Powder</span>
                    <button className="adtocart-btn">Add to Cart</button>

                </div>
                <div className="productCard">
                    <img src={product4} alt="product1" className="productImg"/>
                    <span>Towels</span>
                    <button className="adtocart-btn">Add to Cart</button>

                </div>
                <div className="productCard">
                    <img src={product5} alt="product1" className="productImg"/>
                    <span>Wrist Wrap</span>
                    <button className="adtocart-btn">Add to Cart</button>

                </div>
                
                <div className="productCard">
                    <img src={product6} alt="product1" className="productImg"/>
                    <span>Gloves</span>
                    <button className="adtocart-btn">Add to Cart</button>

                </div>
                <div className="productCard">
                    <img src={product7} alt="product1" className="productImg"/>
                    <span>Male Gym Shorts</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product8} alt="product1" className="productImg"/>
                    <span>Duffle Bag</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product9} alt="product1" className="productImg"/>
                    <span>Yoga Mat</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product10} alt="product1" className="productImg"/>
                    <span>Grip Tape</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product11} alt="product1" className="productImg"/>
                    <span>Female Yoga Shorts</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product12} alt="product1" className="productImg"/>
                    <span>Cleaning Wipes</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product13} alt="product1" className="productImg"/>
                    <span>Massage Gun</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product14} alt="product1" className="productImg"/>
                    <span>Squat Pack</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                <div className="productCard">
                    <img src={product15} alt="product1" className="productImg"/>
                    <span>Floor Mat</span>
                    <button className="adtocart-btn">Add to Cart</button>
                </div>
                
            </div>
        </>
    )
}
export default ProductCard;