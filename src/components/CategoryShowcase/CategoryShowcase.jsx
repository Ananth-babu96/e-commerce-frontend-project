import React from "react";
import "./CategoryShowcase.scss";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
const CategoryShowcase = ({ category, title }) => {
   return (
      <section className="category-section">
         <div className="category-section__title">
            <h2>{title}</h2>
         </div>
         <div className="category-section__grid">
            {category.map((product, index) => {
               return (
                  <div className="category-section__product" key={index}>
                     <ShowcaseItem product={product} />
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default CategoryShowcase;
