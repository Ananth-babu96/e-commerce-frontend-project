import React from "react";
import "./MobileSearchBar.scss";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const MobileSearchBar = ({ openMobileSearchBar }) => {
   return (
      <div className="mobile-searchbar">
         <form className="mobile-searchbar__form">
            <button onClick={openMobileSearchBar}>
               <FaTimes />
            </button>
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
      </div>
   );
};

export default MobileSearchBar;
