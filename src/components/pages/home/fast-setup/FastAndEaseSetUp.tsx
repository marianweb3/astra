"use client";
import React from "react";

import { AnimatedText } from "@/components/common/animations/AnimatedText";
import ActionButtons from "@/components/common/buttons/ActionButtons";
import { useThemeObserver } from "@/hooks/useThemeObserver";

const FastAndEaseSetUp = () => {
  const isDark = useThemeObserver();

  return (
    <section className="px-6 py-6 mt-[105px] w-full mx-auto max-w-[1800px]">
      <div className="flex flex-col md:justify-center gap-5 s:items-center mb-6 md:mb-[65px]">
        <AnimatedText
          once
          startText="Fast and easy"
          el="h1"
          word="set&nbsp;up"
          className="max-w-[358px] md:max-w-[891px] text-left s:text-center"
        />
        <p className="font-inter font-medium text-[14px] md:text-[24px] leading-[16.94px] md:leading-[29.05px] text-black dark:text-white max-w-[318px] md:max-w-[794px] md:text-center">
          Use your card as soon as it's issued; instantly
        </p>
      </div>
      <ActionButtons className="!justify-center" />
      <img
        src={isDark ? "/static/setup/dark-card.png" : "/static/setup/card.png"}
        alt="Set up"
        className="mt-10 xl:mt-0"
      />
    </section>
  );
};

export default FastAndEaseSetUp;
