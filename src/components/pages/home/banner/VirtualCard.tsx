"use client";
import { motion } from "framer-motion";

import { useThemeObserver } from "@/hooks/useThemeObserver";

const flipVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

type VirtualCardProps = {
  flipped: boolean;
};

const VirtualCard = ({ flipped }: VirtualCardProps) => {
  const isDark = useThemeObserver();

  return (
    <div className="pt-[66px] relative flex justify-center items-center w-full mx-auto">
      <motion.div
        className="relative h-[280px] s:h-[340px] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[615px] z-[1] shrink-0 "
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={flipped ? "back" : "front"}
          variants={flipVariants}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={
              isDark
                ? "/static/banner/dark-diamond.png"
                : "/static/banner/diamond.png"
            }
            alt="diamondSlim"
            className="absolute xs:block hidden z-10 xs:right-[76%] md:right-[70%]  md:top-[-10%] max-w-[50vw]"
          />
          <motion.img
            src={"/static/banner/card.svg"}
            alt="Credit Card"
            className="w-full max-w-[915.53px] absolute"
            style={{ backfaceVisibility: "hidden" }}
          />
          <motion.img
            src={"/static/banner/scan-card.svg"}
            alt="Credit Card"
            className="w-full max-w-[615.53px] absolute"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
          <img
            src={"/static/banner/asterisk.svg"}
            alt="asterisk"
            className="absolute z-[-1] right-[-7%] top-[-15%] sm:right-[-10%] sm:top-[-25%] lg:right-[-20%] lg:top-[-25%] max-w-[50vw]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VirtualCard;
