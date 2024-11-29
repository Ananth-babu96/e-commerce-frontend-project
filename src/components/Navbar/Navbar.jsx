import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import logo from "../../images/elite-men-logo-white.png";
import MobileSearchBar from "../MobileSearchBar/MobileSearchBar";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
   const [openSearchBar, setOpenSearchBar] = useState(false);
   const openMobileSearchBar = () => {
      setOpenSearchBar(!openSearchBar);
   };
   return (
      <section className="navbar">
         {openSearchBar ? (
            <MobileSearchBar openMobileSearchBar={openMobileSearchBar} />
         ) : (
            <></>
         )}
         <div className="navbar__logo">
            <Link to="/">
               <img src={logo} alt="" />
            </Link>
         </div>

         <form className="navbar__form">
            <input
               type="search"
               name=""
               id=""
               placeholder="What's on your mind today"
            />
            <button type="submit">
               <IoSearch />
            </button>
         </form>
         <div className="navbar__menu">
            <div className="icon search-icon" onClick={openMobileSearchBar}>
               <IoSearch />
            </div>
            <div className=" icon cart-icon">
               <Link to="/cart">
                  <FaShoppingBag />
               </Link>
            </div>
            <div className=" icon heart-icon">
               <FaRegHeart />
            </div>
         </div>
      </section>
   );
};

export default Navbar;
