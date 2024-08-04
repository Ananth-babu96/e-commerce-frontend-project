import React, { useState } from "react";

import "./Showcase.scss";

import data from "../../data/data.json";
const Showcase = () => {
   const formalShirtsArray = data
      .filter((item) => item.category === "formal-shirts")
      .slice(0, 4);
   return (
      <div className="showcase">
         {formalShirtsArray.map((product, index) => {
            return (
               <div className="showcase__product">
                  <div className="showcase__image">
                     <img src={product.images.main} alt="" />
                  </div>
                  <div className="showcase__info">
                     <p>{product.name.slice(0, 28)}...</p>
                     <p>{product.off}% off</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Showcase;
