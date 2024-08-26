"use client";
import { AnimatedText } from "@/components/common/animations/AnimatedText";
import { comments } from "@/utils/constants/comments";
import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

const CommentSection = () => {
  const [showMarker, setShowMarker] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => {
      setShowMarker(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={
        "flex flex-col justify-center s:items-center overflow-hidden px-4 mt-[105px]"
      }
    >
      <AnimatedText
        once
        flagText={"real"}
        startText="See why crypto natives"
        el="h1"
        word="love&nbsp;the&nbsp;ease&nbsp;and&nbsp;access."
        className="max-w-[225px] xs:max-w-[350px] s:max-w-[382px] md:max-w-[950px] text-left s:text-center mb-[72px]"
        mainSpanStyles="!block md:!inline-flex"
        bgColor="bg-[#A9F019]"
        textStyles="bg-[#A9F019]/20"
        showMarker={showMarker}
      />
      <div className={"max-w-[1920px] w-full overflow-hidden relative"}>
        <div
          className={
            "sm:flex grid grid-cols-1 xs:grid-cols-2 sm:overflow-x-auto gap-[12px] sm:gap-[24px] scrollbar-hide"
          }
        >
          {comments.map((comment, index) => (
            <CommentItem key={index} item={comment} />
          ))}
        </div>
        <div className="sm:block hidden absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white dark:from-[#0A0A0A] to-transparent pointer-events-none"></div>
        <div className="sm:block hidden absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white dark:from-[#0A0A0A] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default CommentSection;
