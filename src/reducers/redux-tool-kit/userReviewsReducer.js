import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../data/data";
const currentDate = new Date();
const reviewsArray = [
   {
      id: 1,
      customerName: "Christopher Nolan",
      customerLocation: "thanjavur district",
      rating: 4,
      review: "very good",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 3),
      likes: 22,
      dislikes: 14,
      liked: false,
      disliked: false,
   },
   {
      id: 2,
      customerName: "Barak Obama",
      customerLocation: "hariyana",
      rating: 4.1,
      review: "great product",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 5),
      likes: 81,
      dislikes: 4,
      liked: false,
      disliked: false,
   },
   {
      id: 3,
      customerName: "Raguvaran",
      customerLocation: "chennai, tamilnadu",
      rating: 4.2,
      review: "exellent customer service",
      uploadTime: new Date().setDate(currentDate.getDate() - 12),
      likes: 9,
      dislikes: 12,
      liked: false,
      disliked: false,
   },
   {
      id: 4,
      customerName: "harjith singh",
      customerLocation: "punjab",
      rating: 3,
      review: "good quality, but not  perfect",
      uploadTime: new Date().setDate(currentDate.getDate() - 8),
      likes: 28,
      dislikes: 11,
      liked: false,
      disliked: false,
   },
   {
      id: 5,
      customerName: "karan chopra",
      customerLocation: "new dehli",
      rating: 2.5,
      review: "disappointed with my purchase",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 6),
      likes: 17,
      dislikes: 31,
      liked: false,
      disliked: false,
   },
   {
      id: 6,
      customerName: "aravind",
      customerLocation: "kanniyakumari, tamilnadu",
      rating: 3.7,
      review: "value for money",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 8),
      likes: 22,
      dislikes: 20,
      liked: false,
      disliked: false,
   },
   {
      id: 7,
      customerName: null,
      customerLocation: null,
      rating: 4,
      review: "very good product",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 2),
      likes: 55,
      dislikes: 6,
      liked: false,
      disliked: false,
   },

   {
      id: 8,
      customerName: "kishor kumar",
      customerLocation: null,
      rating: 3.8,
      review: "ok",
      uploadTime: new Date().setDate(currentDate.getDate() - 4),
      likes: 13,
      dislikes: 17,
      liked: false,
      disliked: false,
   },
   {
      id: 9,
      customerName: null,
      customerLocation: "ranikanch , kashmeer",
      rating: 4.3,
      review:
         "I just like the product,it was nice,I Would like to continue my purchasing in Flipkart after seeing the quality of this product",
      uploadTime: new Date().setDate(currentDate.getDate() - 9),
      likes: 31,
      dislikes: 9,
      liked: false,
      disliked: false,
   },

   {
      id: 10,
      customerName: "Rajni kanth",
      customerLocation: " chennai , tamilnadu",
      rating: 4,
      review: "very good ma",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 1),
      likes: 82,
      dislikes: 11,
      liked: false,
      disliked: false,
   },
   {
      id: 11,
      customerName: "Mammooty",
      customerLocation: "kerala",
      rating: 4.5,
      review: "valliya product",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 7),
      likes: 10,
      dislikes: 10,
      liked: false,
      disliked: false,
   },
   {
      id: 12,
      customerName: "Vignesh Babu",
      customerLocation: "andhra predesh",
      rating: 3,
      review: "average product",
      uploadTime: new Date().setDate(currentDate.getMonth() - 17),
      likes: 18,
      dislikes: 7,
      liked: false,
      disliked: false,
   },
   {
      id: 13,
      customerName: "Prakash Raj",
      customerLocation: "banglore , karnataka",
      rating: 2.2,
      review: "worst product",
      uploadTime: new Date().setMonth(currentDate.getMonth() - 1),
      likes: 0,
      dislikes: 0,
      liked: false,
      disliked: false,
   },
];
const initialState = {
   allProductReviews: PRODUCTS.map(() => {
      return [...reviewsArray];
   }),
   nextProductId: 14,
};

const reviewsSlice = createSlice({
   name: "reviews",
   initialState,
   reducers: {
      LIKE_REVIEW: (state, action) => {
         const { outerIndex, innerIndex } = action.payload;
         const review = state.allProductReviews[outerIndex - 1][innerIndex - 1];
         if (review) {
            if (!review.liked) {
               review.likes += 1;
               review.liked = true;
            } else if (review.liked) {
               review.likes -= 1;
               review.liked = false;
            }
            if (review.disliked && review.liked) {
               review.dislikes -= 1;
               review.disliked = false;
            }
         }
      },
      DISLIKE_REVIEW: (state, action) => {
         const { outerIndex, innerIndex } = action.payload;
         const review = state.allProductReviews[outerIndex - 1][innerIndex - 1];
         if (review) {
            if (!review.disliked) {
               review.dislikes += 1;
               review.disliked = true;
            } else if (review.disliked) {
               review.dislikes -= 1;
               review.disliked = false;
            }
            if (review.disliked && review.liked) {
               review.likes -= 1;
               review.liked = false;
            }
         }
      },
      ADD_REVIEW: (state, action) => {
         const { outerIndex, newReview } = action.payload;

         state.allProductReviews[outerIndex - 1] = [
            ...state.allProductReviews[outerIndex - 1],
            {
               id: state.allProductReviews[outerIndex - 1].length + 1,
               ...newReview,
            },
         ];
         state.nextProductId += 1;
      },
   },
});

export const { LIKE_REVIEW, DISLIKE_REVIEW, ADD_REVIEW } = reviewsSlice.actions;
export default reviewsSlice.reducer;
