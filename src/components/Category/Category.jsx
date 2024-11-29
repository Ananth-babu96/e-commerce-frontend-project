import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
const Category = () => {
   const categories = [
      { title: "formal shirts", link: "formal-shirts" },
      { title: "casual shirts", link: "casual-shirts" },
      { title: "formal pants", link: "formal-pants" },
      { title: "casual pants", link: "casual-pants" },
      { title: "watches", link: "watches" },
      { title: "wallets", link: "wallets" },
   ];
   return (
      <section className="categories-container">
         <div className="categories">
            {categories.map((item, index) => {
               return (
                  <Link to={`/${item.link}`}>
                     <p key={index}>{item.title}</p>
                  </Link>
               );
            })}
         </div>
      </section>
   );
};

export default Category;
