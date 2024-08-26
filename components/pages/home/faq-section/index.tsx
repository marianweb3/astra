"use client";
import { faqItems } from "@/utils/constants/faq";
import React, { useState } from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    new Array(faqItems.length).fill(false)
  );

  const toggleOpen = (index: number) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="flex justify-center py-[150px] sm:py-[250px] overflow-hidden px-4">
      <div className={"w-[1600px]"}>
        <div className={"relative flex w-full"}>
          <h2 className="font-inter-tight max-w-[700px] lg:max-w-fit text-black dark:text-white text-[48px] sm:text-[64px] font-[700] mb-[32px]">
            Frequently Asked Questions
          </h2>
          <div
            className={"sm:block hidden absolute flex right-[4%] bottom-[-30%]"}
          >
            <img
              src="/home/faq/Vector-1.png"
              alt="Vector-1 logo"
              className={
                "relative max-w-[142px] max-h-[185px] h-full w-full z-[10]"
              }
              style={{
                filter:
                  "drop-shadow(0px 2px 5.9px rgba(0, 0, 0, 0.25)) drop-shadow(3px -1px 0px rgba(42, 64, 223, 0.90))",
              }}
            />
            <img
              src="/home/faq/Vector.png"
              alt="Vector logo"
              className={
                "absolute max-w-[114px] max-h-[132px] h-full w-full right-[-60%] bottom-[10%]"
              }
              style={{
                filter:
                  "drop-shadow(0px 2px 5.9px rgba(0, 0, 0, 0.25)) drop-shadow(3px -1px 0px rgba(42, 64, 223, 0.90))",
              }}
            />
          </div>
        </div>

        <div
          className={
            "relative flex flex-col rounded-[16px] border border-[#E4E4E7] dark:border-[#1C1C1C] overflow-hidden"
          }
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openStates[index]}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
