import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_REVIEW } from "../../reducers/redux-tool-kit/userReviewsReducer.js";
import { FaRegStar, FaStar, FaTimes } from "react-icons/fa";
import "./ReviewModal.scss";
import Button from "../Button/Button.jsx";
const ReviewModal = ({
   setOpenReviewModal,
   openReviewModal,
   productName,
   brandName,
   image,
   productId,
}) => {
   const dispatch = useDispatch();
   const [givenRating, setGivenRating] = useState(1);
   const [nextStep, setNextStep] = useState(false);
   const [givenReview, setGivenReview] = useState("");

   const slider = useRef(null);
   const sliderFunction = () => {
      slider.current.scrollTo({
         left: slider.current.scrollWidth,
         behavior: "smooth",
      });
   };
   const sliderFunctionTwo = () => {
      slider.current.scrollTo({
         left: 0,
         behavior: "smooth",
      });
   };

   const submitReview = () => {
      dispatch(
         ADD_REVIEW({
            outerIndex: productId,
            newReview: {
               customerName: null,
               customerLocation: "location unknown",
               rating: givenRating,
               review: givenReview,
               uploadTime: new Date(),
               likes: 0,
               dislikes: 0,
               liked: false,
               disliked: false,
            },
         })
      );
      setTimeout(() => {
         if (slider.current) {
            slider.current.scrollTo({
               left: 0,
               behavior: "smooth",
            });
         }
      }, 0);
      setGivenReview("");
      setGivenRating(1);

      setOpenReviewModal(!openReviewModal);
      alert("Thanks for spending your valuable time");
   };
   useEffect(() => {
      slider.current.scrollTo({
         left: 0,
         behavior: "smooth",
      });
   }, []);

   return (
      <div
         className={`review-modal-wrapper ${
            openReviewModal ? "show-modal" : ""
         }`}
      >
         <div className="review-modal-wrapper-close">
            <div
               className="close-icon"
               onClick={() => setOpenReviewModal(!openReviewModal)}
            >
               <FaTimes />
            </div>
            <p>Review Product</p>
         </div>
         <div className="review-modal-container" ref={slider}>
            <div className="review-modal-container__give-stars">
               <img src={image} alt="" />
               <p>{productName}</p>
               <h3>Rate the product</h3>
               <p>How did you feel about this product based on your usage?</p>
               <div className="stars">
                  <div className="star" onClick={() => setGivenRating(1)}>
                     <FaStar />
                  </div>
                  <div className="star" onClick={() => setGivenRating(2)}>
                     {givenRating >= 2 ? <FaStar /> : <FaRegStar />}
                  </div>
                  <div className="star" onClick={() => setGivenRating(3)}>
                     {givenRating >= 3 ? <FaStar /> : <FaRegStar />}
                  </div>
                  <div className="star" onClick={() => setGivenRating(4)}>
                     {givenRating >= 4 ? <FaStar /> : <FaRegStar />}
                  </div>
                  <div className="star" onClick={() => setGivenRating(5)}>
                     {givenRating >= 5 ? <FaStar /> : <FaRegStar />}
                  </div>
               </div>

               <div className="btn-container">
                  <Button
                     text="next"
                     size="small"
                     clickFunction={sliderFunction}
                  />
               </div>
            </div>
            <div className="review-modal-container__add-comment">
               <p>
                  <span className="brand-name">{brandName}</span>
                  {productName}
               </p>
               <div className="stars stars2">
                  <div className="star">
                     <FaStar />
                  </div>
                  <div className="star">
                     {givenRating >= 2 ? <FaStar /> : <FaRegStar />}
                  </div>
                  <div className="star">
                     {givenRating >= 3 ? <FaStar /> : <FaRegStar />}
                  </div>
                  <div className="star">
                     {givenRating >= 4 ? <FaStar /> : <FaRegStar />}
                  </div>
                  <div className="star">
                     {givenRating >= 5 ? <FaStar /> : <FaRegStar />}
                  </div>
               </div>
               <h4>Write a Review</h4>
               <textarea
                  placeholder="How is the product? What do you like? What do you hate?"
                  name=""
                  id=""
                  value={givenReview}
                  onChange={(e) => setGivenReview(e.target.value)}
               ></textarea>
               <div className="btn-container">
                  <Button
                     text="prev"
                     size="small"
                     clickFunction={sliderFunctionTwo}
                  />
                  <Button
                     text="submit"
                     size="small"
                     clickFunction={submitReview}
                     disableCondition={givenReview === "" ? true : false}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewModal;
