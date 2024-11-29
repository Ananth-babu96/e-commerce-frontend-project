import React from "react";
import "./PriceDetails.scss";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const PriceDetails = ({
   totalAmount,
   totalDiscount,
   totalProducts,
   platformFee,
   deliveryCharges,
}) => {
   return (
      <div className="price-details">
         <div className="title">
            <h3>Price Details</h3>
         </div>
         <div>
            <p>price({totalProducts} items)</p>
            <p>
               <span>
                  <MdOutlineCurrencyRupee size={14} />
               </span>
               {totalAmount}
            </p>
         </div>
         <div>
            <p>discount</p>
            <p className="positive">
               -
               <span>
                  <MdOutlineCurrencyRupee size={14} />
               </span>
               {totalDiscount}
            </p>
         </div>
         <div>
            <p>platform fee</p>
            <p>
               <span>
                  <MdOutlineCurrencyRupee size={14} />
               </span>
               {platformFee}
            </p>
         </div>
         <div className="delivery-charge">
            <p> delivery charges</p>
            <p>
               <span>
                  <MdOutlineCurrencyRupee size={14} />
                  {deliveryCharges}
               </span>
               <span className="positive"> free</span>
            </p>
         </div>
         <div className="total-amount">
            <p>total amount</p>
            <p>
               <span>
                  <MdOutlineCurrencyRupee size={14} />
               </span>
               {totalAmount + platformFee}
            </p>
         </div>
         <div className="amount-saved">
            <p>
               you will save
               <span>
                  <MdOutlineCurrencyRupee size={14} />
               </span>
               {totalDiscount + deliveryCharges} on this order
            </p>
         </div>
      </div>
   );
};

export default PriceDetails;
