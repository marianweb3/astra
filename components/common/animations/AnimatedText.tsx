"use client";
import useComponentWidth from "@/hooks/useComponentWidth";
import { useThemeObserver } from "@/hooks/useThemeObserver";
import { useRef } from "react";
import { motion, useInView, Variant } from "framer-motion";

type AnimatedTextProps = {
  flagText?: string;
  startText?: string | string[];
  endText?: string | string[];
  word: string;
  bgColor?: string;
  textStyles?: string;
  mainSpanStyles?: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  wordLength?: number;
  showMarker?: boolean;
};

const defaultAnimation = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const AnimatedText = ({
  flagText,
  startText,
  endText,
  el: Wrapper = "p",
  className,
  word,
  bgColor = "bg-[#3148F2]",
  textStyles = "",
  wordLength = 37,
  mainSpanStyles = "",
  showMarker = true,
}: AnimatedTextProps) => {
  const { width, ref } = useComponentWidth();
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.5 });
  const isDark = useThemeObserver();

  if (!textStyles) textStyles = isDark ? "bg-[#323756]" : "bg-[#2E46F2]/20";

  const textWidth = width;

  return (
    <Wrapper className={`relative ${className}`}>
      <div ref={inViewRef}>
        <motion.span
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          aria-hidden
          className="relative"
        >
          {startText ? (
            <span className="font-inter-tight font-bold text-[48px] leading-[58.08px] md:text-[64px] md:leading-[78px] lg:text-[80px] lg:leading-[96.8px] text-black dark:text-white">
              {startText}{" "}
            </span>
          ) : null}
          <motion.span
            ref={ref}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            aria-hidden
            className={`relative inline-flex items-center ${mainSpanStyles}`}
          >
            {word.split("").map((char, charIndex, array) => (
              <motion.span
                variants={defaultAnimation}
                key={`${char}-${charIndex}`}
                className={`inline-block break-words font-inter-tight font-bold leading-[58px] text-[36px] s:text-[44px] xs:text-[40px] md:text-[64px] md:leading-[78px] lg:text-[80px] lg:leading-[96.8px] text-black  dark:text-white ${textStyles}
              ${
                charIndex === 0
                  ? "md:pl-[15px] pl-[5px] rounded-tl-[13px] rounded-bl-[13px]"
                  : ""
              }
              ${charIndex === array.length - 1 ? "md:pr-[15px] pr-[5px]" : ""}`}
              >
                {" "}
                {char}
              </motion.span>
            ))}

            {showMarker ? (
              <motion.div
                className={`absolute bottom-0 left-0 h-full bg-[#3148F2] w-[4px] ${bgColor}`}
                variants={{
                  hidden: { x: 0 },
                  visible: { x: textWidth }, // Move to the end of the text width
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: word.length * 0.1, // Matches the text animation speed
                  ease: "linear",
                }}
              >
                {flagText ? (
                  <div
                    className={`${bgColor} absolute bottom-full left-0 px-[6px] py-[4px] md:px-[8px] md:py-[6px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px]`}
                  >
                    <h3
                      className={
                        "text-[#FFF] font-inter-tight text-[12px] sm:text-[18px] lg:text-[24px] font-[700]"
                      }
                    >
                      {flagText}
                    </h3>
                  </div>
                ) : (
                  <div
                    className={`absolute size-3 bottom-full left-1/2 transform -translate-x-1/2 ${bgColor} rounded-full`}
                  ></div>
                )}
              </motion.div>
            ) : null}
          </motion.span>
          {endText ? (
            <span className="font-inter-tight font-bold text-[48px] leading-[58px] md:text-[64px] md:leading-[78px] lg:text-[80px] lg:leading-[96.8px] text-black  dark:text-white">
              {" "}
              {endText}
            </span>
          ) : null}
        </motion.span>
      </div>
    </Wrapper>
  );
};
