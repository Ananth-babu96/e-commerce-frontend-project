import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ADD_TO_BAG } from "../../reducers/cartReducer.js";
import {
   IoIosArrowBack,
   IoIosArrowForward,
   IoIosArrowDown,
} from "react-icons/io";
import CategoryShowcase from "../CategoryShowcase/CategoryShowcase.jsx";
import CustomerReviews from "../CustomerReviews/CustomerReviews.jsx";
import Rating from "../Rating/Rating.jsx";
import ReviewModal from "../ReviewModal/ReviewModal.jsx";

const ProductDetails = ({ product, related_products }) => {
   const side_images = product.images.side;
   const all_images = [product.images.main, ...side_images];

   const dispatch = useDispatch();

   const [size, setSize] = useState("m");
   const [quantity, setQuantity] = useState(1);
   const [isQuantityOpen, setIsQuantityOpen] = useState(false);
   const [displayImage, setDisplayImage] = useState(0);
   const [showProductDetails, setShowProductDetails] = useState(false);
   const [openReviewModal, setOpenReviewModal] = useState(false);

   const quantityArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
   ];

   const selectSize = (value) => {
      setSize(value);
      console.log(size);
   };
   const selectQuantity = (value) => {
      setQuantity(value);
      setIsQuantityOpen(false);
   };

   const nextImage = () => {
      if (displayImage < all_images.length - 1) {
         setDisplayImage((prev) => prev + 1);
      } else return;
   };
   const prevImage = () => {
      if (displayImage > 0) {
         setDisplayImage((prev) => prev - 1);
      } else return;
   };

   const openProductDetails = () => {
      setShowProductDetails(!showProductDetails);
   };

   const addProductToCart = () => {
      dispatch(ADD_TO_BAG({ item: product, size: size, qty: quantity }));
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      setDisplayImage(0);
      setShowProductDetails(false);
      setSize("m");
      setQuantity(1);
   }, [product]);
   useEffect(() => {
      if (openReviewModal) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "";
      }
   }, [openReviewModal]);
   useEffect(() => {}, []);
   const detailsKeys = Object.keys(product.details);
   const detailsValues = Object.values(product.details);
   return (
      <section className="product">
         <ReviewModal
            openReviewModal={openReviewModal}
            setOpenReviewModal={setOpenReviewModal}
            productName={product.name}
            brandName={product.brand}
            image={product.images.main}
            productId={product.id}
         />
         <div className="product__details">
            <div className="details__top">
               <div className="product-images">
                  <div className="side-images">
                     {all_images.map((image, index) => {
                        return (
                           <div
                              key={index}
                              className={`side-image ${
                                 index === displayImage ? "current-image" : ""
                              }`}
                              onClick={() => setDisplayImage(index)}
                           >
                              <img
                                 src={image}
                                 alt=""
                                 className={`image_${index}`}
                              />
                           </div>
                        );
                     })}
                  </div>
                  <div className="main-image">
                     <div className="btn next-btn" onClick={nextImage}>
                        <IoIosArrowForward />
                     </div>
                     <div className="btn prev-btn" onClick={prevImage}>
                        <IoIosArrowBack />
                     </div>
                     <div className={`image-slider image_${displayImage}`}>
                        {all_images.map((image, index) => {
                           return (
                              <img
                                 src={image}
                                 key={index}
                                 alt="product image"
                              />
                           );
                        })}
                     </div>
                  </div>
                  <div className="product-images__indicators">
                     {all_images.map((image, index) => {
                        return (
                           <div
                              key={index}
                              className={`indicator ${
                                 displayImage === index
                                    ? "current-indicator"
                                    : ""
                              }`}
                           ></div>
                        );
                     })}
                  </div>
               </div>
               <div className="product-info">
                  <h1>{product.brand}</h1>
                  <h2>{product.name}</h2>
                  <p className="product-info__price">
                     <span className="old-price">
                        &#x20B9;{product.oldPrice}
                     </span>
                     &#x20B9;{product.newPrice}
                     <span className="off">{product.off}% off</span>
                  </p>
                  <Rating
                     rating={product.ratings}
                     size="large"
                     reviewStatus={"good"}
                  />
                  {product.category !== "watches" ? (
                     <div className="product-info__sizes">
                        <p className="title">size</p>
                        <div
                           className={`size ${
                              size === "s" ? "selected-size" : ""
                           }`}
                           id="s"
                           onClick={() => selectSize("s")}
                        >
                           s
                        </div>
                        <div
                           className={`size ${
                              size === "m" ? "selected-size" : ""
                           }`}
                           id="m"
                           onClick={() => selectSize("m")}
                        >
                           m
                        </div>
                        <div
                           className={`size ${
                              size === "l" ? "selected-size" : ""
                           }`}
                           id="l"
                           onClick={() => selectSize("l")}
                        >
                           l
                        </div>
                        <div
                           className={`size ${
                              size === "xl" ? "selected-size" : ""
                           }`}
                           id="xl"
                           onClick={() => selectSize("xl")}
                        >
                           xl
                        </div>
                        <div
                           className={`size ${
                              size === "xxl" ? "selected-size" : ""
                           }`}
                           id="xxl"
                           onClick={() => selectSize("xxl")}
                        >
                           xxl
                        </div>
                     </div>
                  ) : (
                     <></>
                  )}
                  <div className="product-info__quantity">
                     <div
                        className="quantity"
                        onClick={() => setIsQuantityOpen(!isQuantityOpen)}
                     >
                        qty: <span> {quantity}</span>
                        <span>
                           <IoIosArrowDown size={12} />
                        </span>
                     </div>

                     <div
                        className={`quantity-options ${
                           isQuantityOpen ? "show" : ""
                        }`}
                     >
                        <ul>
                           {quantityArray.map((number, index) => {
                              return (
                                 <li
                                    key={index}
                                    onClick={() => selectQuantity(number)}
                                 >
                                    {number}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
                  <div className="buttons">
                     <button
                        className="buttons__bag"
                        onClick={addProductToCart}
                     >
                        Add To Bag
                     </button>
                     <button className="buttons__wishlist">
                        Add To Wish List
                     </button>
                  </div>
                  <div className="product-info__product-details">
                     <hr />
                     <div
                        className="product-details-title"
                        onClick={openProductDetails}
                     >
                        <h2>product details</h2>
                        <span>
                           {showProductDetails ? (
                              <FaMinus size={12} />
                           ) : (
                              <FaPlus size={12} />
                           )}
                        </span>
                     </div>
                     <table
                        className={showProductDetails ? "show-details" : ""}
                     >
                        <div className="product-details-keys">
                           {detailsKeys.map((key, index) => {
                              return (
                                 <tr key={index}>
                                    <td>{key}</td>
                                 </tr>
                              );
                           })}
                        </div>
                        <div className="product-details-values">
                           {detailsValues.map((value, index) => {
                              return (
                                 <tr key={index}>
                                    <td>{value}</td>
                                 </tr>
                              );
                           })}
                        </div>
                     </table>
                     <hr />
                  </div>
                  <CustomerReviews
                     rating={product.ratings}
                     productId={product.id}
                     setOpenReviewModal={setOpenReviewModal}
                     openReviewModal={openReviewModal}
                  />
               </div>
            </div>
         </div>
         <CategoryShowcase
            category={related_products}
            title={"Related Products"}
         />
      </section>
   );
};

export default ProductDetails;
