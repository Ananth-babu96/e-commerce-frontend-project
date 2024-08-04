import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
const Category = () => {
   const categories = [
      "formal shirts",
      "casual shirts",
      "formal pants",
      "casual pants",
      "watches",
      "wallets",
   ];
   return (
      <section className="categories-container">
         <div className="categories">
            {categories.map((item, index) => {
               return (
                  <Link to="/">
                     <p key={index}>{item}</p>
                  </Link>
               );
            })}
         </div>
      </section>
   );
};

export default Category;
