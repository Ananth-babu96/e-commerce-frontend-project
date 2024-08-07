import React, { useRef } from "react";
import "./Showcase.scss";
import {
   IoIosArrowDropleftCircle,
   IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
const ProductsDisplay = ({ showcaseItem }) => {
   const slider = useRef(null);

   const sliderFunction = () => {
      slider.current.scrollTo({
         left: slider.current.scrollWidth,
         behavior: "smooth",
      });
   };
   const sliderFunctionTwo = () => {
      slider.current.scrollTo({ left: 0, behavior: "smooth" });
   };
   return (
      <div className="wrapper">
         <div className="products-display__title">
            <h1>Best deals on formals</h1>
         </div>

         <div
            className="left-right-arrows left-icon"
            onClick={sliderFunctionTwo}
         >
            <IoIosArrowDropleftCircle />
         </div>
         <div className="left-right-arrows right-icon" onClick={sliderFunction}>
            <IoIosArrowDroprightCircle />
         </div>

         <div className="products-display" ref={slider}>
            <div className="products-display__cards">
               {showcaseItem.map((product, index) => {
                  return (
                     <div key={index} className="products-display__card">
                        <div className="card__image">
                           <img src={product.images.main} alt="" />
                        </div>
                        <div className="card__text">
                           <p>{product.brand}</p>
                           <p className="off">{product.off}% off</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="products-display__btn">
            <button>see more</button>
         </div>
      </div>
   );
};

export default ProductsDisplay;
