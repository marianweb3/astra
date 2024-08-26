"use client";
import { AnimatedText } from "@/components/common/animations/AnimatedText";
import ActionButtons from "@/components/common/buttons/ActionButtons";
import { useState } from "react";
import VirtualCard from "./VirtualCard";

const Banner = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <section className="px-6 py-6 md:mt-[105px] w-full mx-auto max-w-[1400px]">
      <div className="flex flex-col s:justify-center gap-5 s:items-center mb-6 md:mb-[65px]">
        <AnimatedText
          once
          startText="Unlock"
          endText="with our crypto card"
          el="h1"
          flagText={"beta"}
          word="digital&nbsp;finance"
          className="max-w-[358px] md:max-w-[891px] text-left s:text-center"
          wordLength={34.5}
        />
        <p className="font-inter font-medium text-[14px] md:text-[24px] leading-[16.94px] md:leading-[29.05px] text-black dark:text-white max-w-[318px] md:max-w-[794px] md:text-center">
          Instant issuance. No personal information. Spend it anywhere prepaid
          cards are accepted.
        </p>
      </div>
      <ActionButtons onConnectWalletClick={handleFlip} />
      <VirtualCard flipped={flipped} />
    </section>
  );
};

export default Banner;
