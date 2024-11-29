import React from "react";
import "./Rating.scss";

import { FaStar } from "react-icons/fa";

const Rating = ({ rating, size, reviewStatus }) => {
   return (
      <div className={`rating-box ${size} ${reviewStatus}`}>
         <p>{rating}</p>
         <p>
            <FaStar />
         </p>
      </div>
   );
};

export default Rating;
