import React, { useState } from "react";

const useModal = () => {
   const [isModalOpen, setModalOpen] = useState(false);

   const openModal = () => {
      setModalOpen(true);
      setInterval(() => {
         setModalOpen(false);
      }, 4000);
   };
   return {
      isModalOpen,
      openModal,
   };
};

export default useModal;
