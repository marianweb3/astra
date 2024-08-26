import React, { RefObject, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import WhiteButton from "@/components/common/buttons/WhiteButton";
import ThemeToggle from "../../ThemeToggle";

interface ModalProps {
  toggleMenu: () => void;
}

export const navLinkVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export const menuVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const links = [
  { text: "About", path: "/" },
  { text: "Merchant Lookup", path: "/" },
  { text: "FAQ", path: "/" },
  { text: "Support", path: "/" },
];
const MotionLink = motion(Link);

const Modal = ({ toggleMenu }: ModalProps) => {
  return (
    <motion.div
      className="absolute z-[1] left-0 top-[58px] w-full p-4 flex flex-col items-center justify-center z-50 border-b-2 border-[#1A1A1A] bg-black/90 dark:bg-white/70 shadow-[0px_25px_64px_0px_#0C0C0C] dark:shadow-[0px_25px_64px_0px_#fffff] backdrop-blur-[7px]"
      initial="hidden"
      animate="visible"
      variants={menuVariants}
    >
      <nav className="flex flex-col gap-[32px]">
        <div className={"flex flex-col gap-[8px]"}>
          {links.map((item, index) => (
            <MotionLink
              href={""}
              key={index}
              className="font-inter-tight text-white font-[700] dark:text-black text-[32px] px-[8px] py-[4px] tracking-[0.88px] leading-[120%] flex justify-between hover:bg-[#3f55f31a] hover:text-[#2E46F2] dark:hover:text-[#2E46F2] rounded-[14px]"
              onClick={toggleMenu}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              {item.text}
            </MotionLink>
          ))}
        </div>

        <div className="flex items-center justify-center w-full gap-4">
          <ThemeToggle />
          <WhiteButton />
        </div>
      </nav>
    </motion.div>
  );
};

export default Modal;
