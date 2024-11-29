import React from "react";
import "./PopupModal.scss";
import { useState } from "react";
import { useEffect } from "react";
const PopupModal = ({ text, modalState }) => {
   return (
      <div className={`popup-modal ${modalState ? "show" : ""}`}>{text}</div>
   );
};

export default PopupModal;
