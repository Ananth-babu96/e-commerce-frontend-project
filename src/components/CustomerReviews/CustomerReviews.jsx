import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   LIKE_REVIEW,
   DISLIKE_REVIEW,
   ADD_REVIEW,
} from "../../reducers/redux-tool-kit/userReviewsReducer.js";
import "./CustomerReviews.scss";

import Rating from "../Rating/Rating.jsx";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TbRubberStamp } from "react-icons/tb";

const CustomerReviews = ({
   rating,
   productId,
   setOpenReviewModal,
   openReviewModal,
}) => {
   const reviewState = useSelector((state) => state.reviews.allProductReviews);
   const dispatch = useDispatch();

   const likeReview = (id) => {
      dispatch(LIKE_REVIEW({ outerIndex: productId, innerIndex: id }));
   };
   const dislikeReview = (id) => {
      dispatch(DISLIKE_REVIEW({ outerIndex: productId, innerIndex: id }));
   };

   const currentProductReviews = reviewState.find(
      (_, index) => index + 1 === productId
   );

   const formater = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
   const DIVISIONS = [
      { amount: 60, name: "seconds" },
      { amount: 60, name: "minutes" },
      { amount: 24, name: "hours" },
      { amount: 7, name: "days" },
      { amount: 4.34524, name: "weeks" },
      { amount: 12, name: "months" },
      { amount: Number.POSITIVE_INFINITY, name: "years" },
   ];

   function formatTimeAgo(date) {
      let duration = (date - new Date()) / 1000;

      for (let i = 0; i < DIVISIONS.length; i++) {
         const division = DIVISIONS[i];
         if (
            Math.abs(duration) < division.amount &&
            division.name === "seconds"
         ) {
            return "just now";
         } else if (
            Math.abs(duration) < division.amount &&
            division.name !== "seconds"
         ) {
            return formater.format(Math.round(duration), division.name);
         }
         duration /= division.amount;
      }
   }

   return (
      <section className="reviews-section">
         <div className="modal"></div>
         <div className="reviews-section__title">
            <h2>Ratings & Reviews</h2>
            <p>
               <Rating rating={rating} size="large" />
               <span>
                  312 ratings and {currentProductReviews.length} reviews
               </span>
            </p>
            <button onClick={() => setOpenReviewModal(!openReviewModal)}>
               Rate Product
            </button>
         </div>
         <hr />
         <div className="reviews-section__reviews">
            {currentProductReviews?.map((review, index) => {
               return (
                  <div key={index} className="review">
                     <div className="review-left">
                        <div className="review-left-top">
                           <Rating
                              rating={review.rating}
                              size="small"
                              reviewStatus={
                                 review.rating <= 2
                                    ? "bad"
                                    : review.rating <= 3
                                    ? "average"
                                    : review.rating >= 3 && "good"
                              }
                           />
                           <p className="review-text">{review.review}</p>
                        </div>
                        <div className="review-left-bottom">
                           <p className="customer-name">
                              {review.customerName
                                 ? review.customerName
                                 : "Elite Gents Customer"}
                              <span>{formatTimeAgo(review.uploadTime)}</span>
                           </p>
                           <p className="customer-location">
                              Certified Buyer,
                              <span>
                                 {review.customerLocation
                                    ? `    ${review.customerLocation}`
                                    : " unknown location"}
                              </span>
                           </p>
                        </div>
                     </div>
                     <div className="review-right">
                        <div onClick={() => likeReview(review.id)}>
                           <AiFillLike /> <span>{review.likes}</span>
                        </div>
                        <div onClick={() => dislikeReview(review.id)}>
                           <AiFillDislike /> <span>{review.dislikes}</span>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default CustomerReviews;
