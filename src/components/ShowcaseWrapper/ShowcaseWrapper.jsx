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

   return (
      <div>
         <Showcase showcaseItem={formal_shirts_showcase} />

         <Showcase showcaseItem={casual_shirts_showcase} />
      </div>
   );
};

export default ShowcaseWrapper;
