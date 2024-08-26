import React from "react";
import { ArrowDownRight, ArrowUpRight, Ellipsis } from "lucide-react";
import clsx from "clsx";

interface TabsProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const Tabs = ({ onTabChange, activeTab }: TabsProps) => {
  console.log(activeTab);
  return (
    <div className="flex gap-3 w-full">
      <div
        onClick={() => onTabChange("deposit")}
        className={clsx(
          "pl-4 py-3 rounded-2xl flex gap-3 flex-col items-start max-w-[207px] w-full cursor-pointer",
          activeTab === "deposit"
            ? "border border-transparent bg-[#3148F2]"
            : "border border-[#E4E4E7] bg-[#FFFFFF]"
        )}
      >
        <div
          className={clsx(
            "rounded-full grid place-content-center size-10",
            activeTab === "deposit" ? "bg-[#FFFFFF1A]" : "bg-[#EDF1F7]"
          )}
        >
          <ArrowDownRight
            className={clsx(
              activeTab === "deposit" ? "text-white" : "text-black"
            )}
          />
        </div>
        <span
          className={clsx(
            "font-inter font-semibold text-[20px] leading-[24.2px]",
            activeTab === "deposit" ? "text-white" : "text-black"
          )}
        >
          Deposit
        </span>
      </div>

      <div
        onClick={() => onTabChange("withdraw")}
        className={clsx(
          "pl-4 py-3 rounded-2xl flex gap-3 flex-col items-start max-w-[207px] w-full cursor-pointer",
          activeTab === "withdraw"
            ? "border border-transparent bg-[#3148F2]"
            : "border border-[#E4E4E7] bg-[#FFFFFF]"
        )}
      >
        <div
          className={clsx(
            "rounded-full grid place-content-center size-10",
            activeTab === "withdraw" ? "bg-[#FFFFFF1A]" : "bg-[#EDF1F7]"
          )}
        >
          <ArrowUpRight
            className={clsx(
              activeTab === "withdraw" ? "text-white" : "text-black"
            )}
          />
        </div>
        <span
          className={clsx(
            "font-inter font-semibold text-[20px] leading-[24.2px]",
            activeTab === "withdraw" ? "text-white" : "text-black"
          )}
        >
          Withdraw
        </span>
      </div>

      <div
        onClick={() => onTabChange("more")}
        className={clsx(
          "py-3 rounded-2xl flex gap-3 flex-col items-center max-w-[100px] justify-center w-full cursor-pointer",
          activeTab === "more"
            ? "border border-transparent bg-[#3148F2]"
            : "border border-[#E4E4E7] bg-[#FFFFFF]"
        )}
      >
        <div
          className={clsx(
            "rounded-full grid place-content-center size-10",
            activeTab === "more" ? "bg-[#FFFFFF1A]" : "bg-[#EDF1F7]"
          )}
        >
          <Ellipsis
            className={clsx(activeTab === "more" ? "text-white" : "text-black")}
          />
        </div>
        <span
          className={clsx(
            "font-inter font-semibold text-[20px] leading-[24.2px]",
            activeTab === "more" ? "text-white" : "text-black"
          )}
        >
          More
        </span>
      </div>
    </div>
  );
};

export default Tabs;
