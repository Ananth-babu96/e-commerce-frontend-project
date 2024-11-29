import React from "react";
import Showcase from "../Showcase/Showcase";

import { PRODUCTS } from "../../data/data.js";

const ShowcaseWrapper = () => {
   const formal_shirts_showcase = PRODUCTS.filter(
      (product) => product.category === "formal-shirts"
   ).slice(0, 6);
   const casual_shirts_showcase = PRODUCTS.filter(
      (product) => product.category === "casual-shirts"
   ).slice(0, 6);
   const formal_pants_showcase = PRODUCTS.filter(
      (product) => product.category === "formal-pants"
   ).slice(0, 6);
   const casual_pants_showcase = PRODUCTS.filter(
      (product) => product.category === "casual-pants"
   ).slice(0, 6);
   const tshirts_showcase = PRODUCTS.filter(
      (product) => product.category === "t-shirts"
   ).slice(0, 6);
   const watches_showcase = PRODUCTS.filter(
      (product) => product.category === "watches"
   ).slice(0, 6);

   return (
      <div>
         <Showcase showcaseItem={formal_shirts_showcase} />

         <Showcase showcaseItem={casual_shirts_showcase} />

         <Showcase showcaseItem={formal_pants_showcase} />

         <Showcase showcaseItem={casual_pants_showcase} />

         <Showcase showcaseItem={tshirts_showcase} />

         <Showcase showcaseItem={watches_showcase} />
      </div>
   );
};

export default ShowcaseWrapper;
