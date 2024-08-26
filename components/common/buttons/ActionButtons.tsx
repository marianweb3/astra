"use client";
import { QrCode } from "lucide-react";
import clsx from "clsx";

type ActionButtonsProps = {
  onConnectWalletClick?: () => void;
  onLearnMoreClick?: () => void;
  connectWalletText?: string;
  learnMoreText?: string;
  className?: string;
};

const ActionButtons = ({
  onConnectWalletClick,
  onLearnMoreClick,
  connectWalletText = "Connect Wallet",
  learnMoreText = "Learn More",
  className,
}: ActionButtonsProps) => {
  return (
    <div
      className={clsx(
        `flex flex-col s:flex-row gap-3 s:justify-center relative z-10`,
        className
      )}
    >
      <button
        onClick={onConnectWalletClick}
        className="bg-[#3148F2] whitespace-nowrap rounded-full py-[10.5px] md:py-5 px-5 md:px-7 flex items-center gap-3 border border-[#3148F2] text-white transition-colors duration-300 group ease-in-out hover:bg-transparent hover:border-[#3148F2]"
      >
        <span className="font-inter font-semibold text-[14px] leading-[16.94px] md:text-[20px] md:leading-[24.2px] transition-colors duration-300 ease-in-out group-hover:text-[#3148F2]">
          {connectWalletText}
        </span>
        <QrCode className="text-white group-hover:text-[#3148F2]" />
      </button>
      <button
        onClick={onLearnMoreClick}
        className="whitespace-nowrap transition-colors duration-300 ease-in-out rounded-full px-5 py-[14px] md:py-5 md:px-7 flex items-center gap-3 border bg-transparent border-black  hover:bg-black text-black dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white group"
      >
        <span className="font-inter font-semibold text-[14px] leading-[16.94px] md:text-[20px] md:leading-[24.2px] transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black">
          {learnMoreText}
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;
