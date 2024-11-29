import React from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { PRODUCTS } from "../../data/data";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
   const { productId } = useParams();
   const product = PRODUCTS.find((product) => product.id === Number(productId));

   const related_products = PRODUCTS.filter(
      (item) => item.category === product.category
   ).filter((item) => item.id !== product.id);

   return (
      <section>
         <ProductDetails
            product={product}
            related_products={related_products}
         />
      </section>
   );
};

export default ProductsPage;
