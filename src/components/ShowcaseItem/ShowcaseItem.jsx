import React, { useEffect } from "react";
import "./ShowcaseItem.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const ShowcaseItem = ({ product }) => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [product]);
   return (
      <Link to={`/${product.category}/${product.name}/${product.id}`}>
         <div className="products-display__card">
            <div className="card__image">
               <img src={product.images.main} alt="" />
            </div>
            <div className="card__text">
               <p className="brand">{product.brand}</p>
               <p className="product-name">{product.name}</p>
               <p className="price">
                  <span className="old-price">&#x20B9;{product.oldPrice}</span>
                  &#x20B9;{product.newPrice}
                  <span className="off">{product.off}% off</span>
               </p>
               <Rating
                  rating={product.ratings}
                  size="medium"
                  reviewStatus={"good"}
               />
            </div>
         </div>
      </Link>
   );
};

export default ShowcaseItem;
