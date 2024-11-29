import React, { useRef } from "react";
import "./Showcase.scss";
import {
   IoIosArrowDropleftCircle,
   IoIosArrowDroprightCircle,
} from "react-icons/io";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import Button from "../Button/Button";
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
                  return <ShowcaseItem product={product} key={index} />;
               })}
            </div>
         </div>
         <div className="products-display__btn">
            <Button
               text="Explore"
               size="large"
               disableCondition={false}
               clickFunction={() => console.log("hello")}
               isLink={true}
               linkTo={`/${showcaseItem[0].category}`}
            />
         </div>
      </div>
   );
};

export default ProductsDisplay;
