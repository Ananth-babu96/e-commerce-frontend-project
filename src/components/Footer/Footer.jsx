import React, { useState } from "react";
import "./Footer.scss";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdStars, MdCardGiftcard } from "react-icons/md";
import { IoMdHelpCircle, IoIosArrowDown } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

import card1 from "../assets/card-icons/rupay.svg";
import card2 from "../assets/card-icons/discover-3.svg";
import card3 from "../assets/card-icons/american-express-1.svg";
import card4 from "../assets/card-icons/google-pay-logo-2020.svg";
import card5 from "../assets/card-icons/maestro-2.svg";
import card6 from "../assets/card-icons/visa-10.svg";

const Footer = () => {
   const cards = [card1, card2, card3, card4, card5, card6];
   const year = new Date().getFullYear();
   const [dataOpen, setDataOpen] = useState("0");

   const openData = (value) => {
      setDataOpen(value);
      if (dataOpen === value) {
         setDataOpen(0);
      }
   };
   return (
      <footer className="footer">
         <div className="footer__tables-container">
            <table>
               <tr onClick={() => openData("1")}>
                  <th>
                     Customer Care
                     <span className={dataOpen === "1" ? "arrow-up" : ""}>
                        <IoIosArrowDown />
                     </span>
                  </th>
               </tr>
               <div
                  className={`footer__table-data data-one ${
                     dataOpen === "1" ? "show-data" : ""
                  }`}
               >
                  <tr>
                     <td>Create A Return</td>
                  </tr>
                  <tr>
                     <td>Contact Us</td>
                  </tr>
                  <tr>
                     <td>Exchanges & Returns</td>
                  </tr>
                  <tr>
                     <td>Delivery</td>
                  </tr>
                  <tr>
                     <td>Terms & Conditions</td>
                  </tr>
                  <tr>
                     <td>Privacy Policy</td>
                  </tr>
                  <tr>
                     <td>Cookie Policy</td>
                  </tr>
                  <tr>
                     <td>Cookie Center</td>
                  </tr>
               </div>
            </table>
            <table>
               <tr onClick={() => openData("2")}>
                  <th>
                     About Us
                     <span className={dataOpen === "2" ? "arrow-up" : ""}>
                        <IoIosArrowDown />
                     </span>
                  </th>
               </tr>

               <div
                  className={`footer__table-data ${
                     dataOpen === "2" ? "show-data" : ""
                  }`}
               >
                  <tr>
                     <td>Our Pledge</td>
                  </tr>
                  <tr>
                     <td>ELITE GENTS Health In Mind</td>
                  </tr>
                  <tr>
                     <td>Advertising</td>
                  </tr>
                  <tr>
                     <td>ELITE GENTS REWARDS</td>
                  </tr>
                  <tr>
                     <td>Affiliates</td>
                  </tr>
                  <tr>
                     <td>Careers</td>
                  </tr>
                  <tr>
                     <td>Our Apps</td>
                  </tr>
                  <tr>
                     <td>Modern Slavery Statement</td>
                  </tr>
               </div>
            </table>
         </div>

         <div className="footer__options">
            <ul>
               <li>
                  <span>
                     <RiSuitcaseFill />
                  </span>
                  Become A Seller
               </li>
               <li>
                  <span>
                     <MdStars />
                  </span>
                  Advertise
               </li>
               <li>
                  <span>
                     <MdCardGiftcard />
                  </span>
                  Gift Cards
               </li>
               <li>
                  <span>
                     <IoMdHelpCircle />
                  </span>
                  Help Center
               </li>
            </ul>
            <div className="footer__payment-methods">
               {cards.map((card, index) => {
                  return (
                     <div className="card-container">
                        <img src={card} alt="" />
                     </div>
                  );
               })}
            </div>
         </div>

         <div className="footer__copyright">
            <hr />
            <p>
               &copy; elite gents
               <span> {year}</span>
            </p>
            <h3>ELITE GENTS</h3>
         </div>
      </footer>
   );
};

export default Footer;
