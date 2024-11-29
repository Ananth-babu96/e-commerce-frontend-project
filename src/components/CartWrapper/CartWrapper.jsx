import React, { useEffect, useState } from "react";
import "./CartWrapper.scss";
import emptyCart from "../assets/other-images/undraw_empty_cart_co35.svg";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaRupeeSign } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
   REMOVE_FROM_BAG,
   SAVE_FOR_LATER,
   MOVE_TO_BAG,
   ADD_QUANTITY,
} from "../../reducers/cartReducer";
import Button from "../Button/Button";
import PriceDetails from "../PriceDetailsForCart/PriceDetails";
const CartWrapper = () => {
   const [totalAmount, setTotalAmount] = useState(0);
   const [totalDiscount, setTotalDiscount] = useState(0);
   const [totalProducts, setTotoalProducts] = useState(0);
   const [platformFee, setPlatFormFee] = useState(20);
   const [deliveryCharges, setDeliveryCharges] = useState(80);

   const cartProducts = useSelector((state) => state.cart.customersBag);
   const savedProducts = useSelector((state) => state.cart.savedProducts);
   const dispatch = useDispatch();
   const removeProduct = (id) => {
      dispatch(REMOVE_FROM_BAG(id));
   };
   const saveForLater = (item) => {
      dispatch(SAVE_FOR_LATER(item));
   };
   const moveToBag = (item) => {
      dispatch(MOVE_TO_BAG(item));
   };
   const addQuantity = (id, qty) => {
      dispatch(ADD_QUANTITY({ id, qty }));
   };
   useEffect(() => {
      let total = 0;
      let discount = 0;
      let productsCount = 0;
      for (let i = 0; i < cartProducts.length; i++) {
         let currentItem = cartProducts[i];
         total += currentItem.newPrice * currentItem.qty;
         discount +=
            currentItem.oldPrice * currentItem.qty -
            currentItem.newPrice * currentItem.qty;
         productsCount += currentItem.qty;
      }

      setTotalAmount(total);
      setTotalDiscount(discount);
      setTotoalProducts(productsCount);
   }, [cartProducts]);
   return (
      <div className="cart-container">
         <div
            className={`cart-container__left ${
               cartProducts.length === 0 ? "empty-cart" : ""
            }`}
         >
            {cartProducts.length !== 0 ? (
               <div className="cart-products">
                  {cartProducts?.map((item, index) => {
                     return (
                        <div className="cart-product">
                           <Link
                              to={`/${item.category}/${item.name}/${item.id}`}
                           >
                              <img src={item.images.main} alt="" />
                           </Link>
                           <div className="product-text">
                              <p>
                                 <span className="brand-name">
                                    {item.brand}
                                 </span>
                                 <span className="product-name">
                                    {item.name}
                                 </span>
                              </p>
                              <p>
                                 size: <span>{item.size}</span>
                              </p>

                              <p>
                                 <span className="old-price">
                                    &#8377;{item.oldPrice * item.qty}
                                 </span>{" "}
                                 &#8377;{item.newPrice * item.qty}
                                 <span className="off"> {item.off} %</span>
                              </p>
                           </div>
                           <div className="qty">
                              <button
                                 disabled={item.qty === 1 ? true : false}
                                 className="qty-btn reduce-qty"
                                 onClick={() =>
                                    addQuantity(item.id, item.qty - 1)
                                 }
                              >
                                 <FaMinus />
                              </button>
                              <div className="display-qty">{item.qty}</div>
                              <button
                                 disabled={item.qty === 30 ? true : false}
                                 className="qty-btn add-qty"
                                 onClick={() =>
                                    addQuantity(item.id, item.qty + 1)
                                 }
                              >
                                 <FaPlus />
                              </button>
                           </div>

                           <div className="buttons">
                              <button onClick={() => saveForLater(item)}>
                                 save for later
                              </button>

                              <button onClick={() => removeProduct(item.id)}>
                                 remove
                              </button>
                           </div>
                        </div>
                     );
                  })}
                  <div className="priceDetails">
                     <PriceDetails
                        totalAmount={totalAmount}
                        totalProducts={totalProducts}
                        totalDiscount={totalDiscount}
                        deliveryCharges={deliveryCharges}
                        platformFee={platformFee}
                     />
                  </div>
                  <div className="order-btn">
                     <p>
                        <span>
                           <MdOutlineCurrencyRupee />
                        </span>
                        {totalAmount}
                     </p>
                     <Button text={"order now"} size={"large"} isLink={false} />
                  </div>
               </div>
            ) : (
               <div className="no-products">
                  <img src={emptyCart} alt="" />
                  <div>
                     <p>Your Cart is Emtpy</p>
                     <Button
                        text={"Shop Now"}
                        isLink={true}
                        linkTo={"/"}
                        size={"small"}
                     />
                  </div>
               </div>
            )}

            {savedProducts.length !== 0 ? (
               <div className="saved-later-products">
                  <div className="title">
                     <h2>Saved for later ({savedProducts.length})</h2>
                  </div>
                  {savedProducts.map((item, index) => {
                     return (
                        <div className="cart-product">
                           <div className="col col1">
                              <Link
                                 to={`/${item.category}/${item.name}/${item.id}`}
                              >
                                 <img src={item.images.main} alt="" />
                              </Link>
                              <div className="qty">
                                 <button
                                    disabled
                                    className="qty-btn reduce-qty"
                                    onClick={() =>
                                       addQuantity(item.id, item.qty - 1)
                                    }
                                 >
                                    <FaMinus />
                                 </button>
                                 <div className="display-qty">{item.qty}</div>
                                 <button
                                    disabled
                                    className="qty-btn add-qty"
                                    onClick={() =>
                                       addQuantity(item.id, item.qty + 1)
                                    }
                                 >
                                    <FaPlus />
                                 </button>
                              </div>
                           </div>
                           <div className="col col2">
                              <p>
                                 <span className="brand-name">
                                    {item.brand}
                                 </span>
                                 <span className="product-name">
                                    {item.name}
                                 </span>
                              </p>
                              <p>
                                 <span className="old-price">
                                    &#8377;{item.oldPrice}
                                 </span>{" "}
                                 &#8377;{item.newPrice}
                                 <span className="off"> {item.off} %</span>
                              </p>
                              <div className="buttons">
                                 <button onClick={() => moveToBag(item)}>
                                    move to cart
                                 </button>

                                 <button onClick={() => removeProduct(item.id)}>
                                    remove
                                 </button>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            ) : (
               <></>
            )}
         </div>
         {cartProducts.length !== 0 ? (
            <div className="cart-container__right">
               <div className="priceDetails">
                  <PriceDetails
                     totalAmount={totalAmount}
                     totalProducts={totalProducts}
                     totalDiscount={totalDiscount}
                     deliveryCharges={deliveryCharges}
                     platformFee={platformFee}
                  />
               </div>
            </div>
         ) : (
            <></>
         )}
      </div>
   );
};

export default CartWrapper;
