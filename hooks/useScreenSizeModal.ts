"use client";
import { useState, useEffect } from "react";

interface UseScreenSizeModalOptions {
  breakpoint?: number;
  initialState?: boolean;
}

const useScreenSizeModal = ({
  breakpoint = 1024,
  initialState = false,
}: UseScreenSizeModalOptions = {}) => {
  const [isOpenModal, setIsOpenModal] = useState(initialState);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > breakpoint) {
        setIsOpenModal(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  const toggleMenu = () => {
    setIsOpenModal((prev) => !prev);
  };

  return {
    isOpenModal,
    setIsOpenModal,
    toggleMenu,
  };
};

export default useScreenSizeModal;

// Usage in your component:
// const Index = () => {
//   const { isOpenModal, toggleModal } = useScreenSizeModal({ initialState: false });
//
//   // Rest of your component logic
// };
