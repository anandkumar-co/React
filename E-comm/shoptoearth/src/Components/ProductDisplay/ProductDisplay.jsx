import React from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png"
import dullstar from "../Assets/star_dull_icon.png"
const ProductDisplay = (props) => {
    const {product}=props;
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
    </div>
   </div>
  );
};

export default ProductDisplay;
