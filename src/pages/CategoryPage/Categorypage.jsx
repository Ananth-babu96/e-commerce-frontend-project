import React from "react";
import { PRODUCTS } from "../../data/data";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import { useParams } from "react-router-dom";
const Categorypage = () => {
   const { category } = useParams();
   const products = PRODUCTS.filter((product) => product.category === category);
   return (
      <div>
         <CategoryShowcase category={products} title={category} />
      </div>
   );
};

export default Categorypage;
