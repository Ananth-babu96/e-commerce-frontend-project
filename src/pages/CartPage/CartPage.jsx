import React, { useEffect } from "react";
import CartWrapper from "../../components/CartWrapper/CartWrapper";

const CartPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <section>
         <CartWrapper />
      </section>
   );
};

export default CartPage;
