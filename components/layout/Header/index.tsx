"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Modal from "./Modal";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "@/components/common/buttons/WhiteButton";
import useScreenSizeModal from "@/hooks/useScreenSizeModal";
import useScrollDirection from "@/hooks/useScrollDirection";
import Logo from "../Logo";
import Nav from "../Nav";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const { isOpenModal, toggleMenu } = useScreenSizeModal({
    breakpoint: 1024,
    initialState: false,
  });
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();

  // Check if the current location is '/deposit'
  const isDepositPage = pathname === "/deposit";

  return (
    <header
      id={"headerSection"}
      className={clsx(
        "lg:px-4 xl:px-0 lg:sticky transition-all duration-500 z-50",
        {
          "-top-24": scrollDirection === "down",
          "md:top-[25px]": scrollDirection !== "down",
          "hidden xl:block": isDepositPage,
        }
      )}
    >
      <div className="relative z-[2] max-w-[1400px] mx-auto w-full bg-black dark:bg-[#171719] lg:rounded-full p-[10px] pl-6 flex justify-between items-center">
        <Logo logoBetaText={true} />
        <Nav className="lg:flex hidden" />
        <div className="lg:flex hidden items-center gap-4">
          <ThemeToggle />
          <WhiteButton />
        </div>

        <div className="lg:hidden mr-4">
          {!isOpenModal ? (
            <motion.button
              onClick={toggleMenu}
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={32} />
            </motion.button>
          ) : (
            <motion.button
              onClick={toggleMenu}
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>
          )}
        </div>
      </div>
      {isOpenModal && <Modal toggleMenu={toggleMenu} />}

      {/*<Nav className="lg:hidden flex py-[6px] border-b border-[#E4E4E7] px-[4px] items-center" />*/}
    </header>
  );
};

export default Header;
