import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png"
import dullstar from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
   <div className="productDisplay">
    <div className="productDisplay-left">
        <div className="productDisplay-imglist">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
            <img src={product.image} alt="" className="productDisplay-main-img"/>
        </div>
    </div>
    <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-star">
            <img src={star} alt="" /><img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={dullstar} alt="" />
            <p>(1224)</p>
        </div>
        <div className="productDisplay-prices">
            <div className="productDisplay-prices-old">${product.old_price}</div>
            <div className="productDisplay-prices-new">${product.new_price}</div>
        </div>
        <div className="productDisplay-description">After that we will make the single product page with product image gallery, product price,

        </div>
        <div className="productDisplay-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXl</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className="productDisplay-right-category">
            <span>Category : </span>Women,Tshirt, crop top
        </p>
        <p className="productDisplay-right-category">
            <span>Tags : </span>Modern,Latest
        </p>
    </div>
   </div>
  );
};

export default ProductDisplay;
