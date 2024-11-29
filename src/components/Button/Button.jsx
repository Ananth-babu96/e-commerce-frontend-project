import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
const Button = ({
   text,
   size,
   clickFunction,
   disableCondition,
   isLink,
   linkTo,
}) => {
   return (
      <button
         className={`btn ${size}`}
         onClick={clickFunction}
         disabled={disableCondition}
      >
         {isLink ? <Link to={`${linkTo}`}>{text}</Link> : text}
      </button>
   );
};

export default Button;
