import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import logo from "../../images/elite-men-logo.png";

import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar__logo">
            <img src={logo} alt="" />
         </div>
         <form className="navbar__search-bar">
            <input
               type="search"
               name=""
               id=""
               placeholder="whats in your mind today..."
            />
            <span>
               <IoSearch />
            </span>
         </form>
         <div className="navbar__cart">
            <Link to="/wishlist">
               <FaRegHeart />
            </Link>
            <Link to="/cart">
               <FaShoppingBag />
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
