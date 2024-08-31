"use client";

import { AnimatedText } from "@/components/common/animations/AnimatedText";
import { useThemeObserver } from "@/hooks/useThemeObserver";

const ImmediateStablecoin = () => {
  const isDark = useThemeObserver();

  return (
    <section className="py-10 md:py-0 max-w-[1800px] mx-auto w-full flex gap-[50px] px-4 md:px-6  min-[1400px]:flex-row flex-col items-center">
      <img
        src={
          isDark
            ? "/static/stablecoin/dark-card1.png"
            : "/static/stablecoin/card1.png"
        }
        alt="Card 1"
        className="w-full max-w-[700px] min-[1700px]:max-w-[800px] order-2 min-[1400px]:order-1"
      />
      <div className="flex flex-col gap-[46px] w-full order-1 min-[1400px]:order-2 items-start md:items-center min-[1400px]:items-start">
        <div className="flex flex-col gap-[10px]">
          <AnimatedText
            once
            flagText={"rush"}
            endText="stablecoin spending"
            el="h1"
            word="Immediate"
            className="text-left max-w-[767px] w-full"
            wordLength={43.5}
          />
          <p className="font-inter-tight font-medium text-[16px] sm:text-[24px] leading-[19.36px] sm:leading-[29.04px] text-black dark:text-white">
            Use your stablecoins like cash in a safe and compliant manner¹
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={"/static/stablecoin/credit-card.svg"}
                alt="Credit Card"
                className="size-10"
              />
              <span className="font-inter-tight font-bold text-[18px] sm:text-[32px] leading-[21.78px] sm:leading-[38.72px] text-black dark:text-white">
                Like any regular card
              </span>
            </div>
            <p className="font-inter-tight font-medium text-[14px] sm:text-[20px] leading-[16.94px] sm:leading-[24.2px] text-[#525557] dark:text-[#646668]">
              You will be able to use your card anywhere prepaid cards are
              accepted.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={"/static/stablecoin/user-check.svg"}
                alt="Credit Card"
                className="size-10"
              />
              <span className="font-inter-tight font-bold text-[18px] sm:text-[32px] leading-[21.78px] sm:leading-[38.72px] text-black dark:text-white">
                No Lengthy Signup process
              </span>
            </div>
            <p className="font-inter-tight font-medium text-[14px] sm:text-[20px] leading-[16.94px] sm:leading-[24.2px] text-[#525557] dark:text-[#646668]">
              You will be able to use your card anywhere prepaid cards are
              accepted.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={"/static/stablecoin/lock.svg"}
                alt="Credit Card"
                className="size-10"
              />
              <span className="font-inter-tight font-bold text-[18px] sm:text-[32px] leading-[21.78px] sm:leading-[38.72px] text-black dark:text-white">
                Pay with peace of mind
              </span>
            </div>
            <p className="font-inter-tight font-medium text-[14px] sm:text-[20px] leading-[16.94px] sm:leading-[24.2px] text-[#525557] dark:text-[#646668]">
              Our compliance focus sets guard rails so you can safely spend
              without worry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmediateStablecoin;
