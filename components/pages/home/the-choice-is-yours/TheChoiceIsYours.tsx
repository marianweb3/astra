"use client";
import { AnimatedText } from "@/components/common/animations/AnimatedText";
import { useThemeObserver } from "@/hooks/useThemeObserver";

const TheChoiceIsYours = () => {
  const isDark = useThemeObserver();

  return (
    <section className="max-w-[1600px] mx-auto w-full flex gap-[50px] min-[1400px]:flex-row flex-col items-center transition-all px-4 md:px-6">
      <div className="flex flex-col gap-[46px] w-full md:items-center items-start min-[1400px]:items-start">
        <div className="flex flex-col gap-[10px]">
          <AnimatedText
            once
            flagText={"true"}
            startText="The choice is"
            el="h1"
            word="yours"
            className="text-left w-full"
            bgColor="bg-[#F2BA2E]"
            textStyles="bg-[#F2BA2E]/20"
            wordLength={43.5}
          />
          <p className="font-inter-tight font-medium text-[16px] sm:text-[24px] leading-[19.36px] sm:leading-[29.04px] text-black dark:text-white">
            Select from a list stablecoins and currencies
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={"/static/stablecoin/solar_cup-bold.svg"}
                alt="cup"
                className="size-10"
              />
              <span className="font-inter-tight font-bold text-[18px] sm:text-[32px] leading-[21.78px] sm:leading-[38.72px] text-black dark:text-white">
                Diversify your funding
              </span>
            </div>
            <p className="font-inter-tight font-medium text-[14px] sm:text-[20px] leading-[16.94px] sm:leading-[24.2px] text-[#525557] dark:text-[#646668]">
              Choose between DAI, USDC and USDT (Tether) to spend on your card.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={"/static/stablecoin/bxs_gas-pump.svg"}
                alt="gas"
                className="size-10"
              />
              <span className="font-inter-tight font-bold text-[18px] sm:text-[32px] leading-[21.78px] sm:leading-[38.72px] text-black dark:text-white">
                No gas fees
              </span>
            </div>
            <p className="font-inter-tight font-medium text-[14px] sm:text-[20px] leading-[16.94px] sm:leading-[24.2px] text-[#525557] dark:text-[#646668]">
              There aren't additional gas fees for spending or refunds.²
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                src={"/static/stablecoin/gridicons_stats-alt.svg"}
                alt="stats"
                className="size-10"
              />
              <span className="font-inter-tight font-bold text-[18px] sm:text-[32px] leading-[21.78px] sm:leading-[38.72px] text-black dark:text-white">
                Additional coins incoming
              </span>
            </div>
            <p className="font-inter-tight font-medium text-[14px] sm:text-[20px] leading-[16.94px] sm:leading-[24.2px] text-[#525557] dark:text-[#646668]">
              Support for Solana just added. Other chains coming soon.
            </p>
          </div>
        </div>
      </div>
      <img
        src={
          isDark
            ? "/static/stablecoin/dark-card2.png"
            : "/static/stablecoin/card2.png"
        }
        alt="Card 2"
        className="w-full max-w-[700px] min-[1700px]:max-w-[800px] order-2 min-[1400px]:order-1"
      />
    </section>
  );
};

export default TheChoiceIsYours;
