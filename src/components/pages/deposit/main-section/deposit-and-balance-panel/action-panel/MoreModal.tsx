"use client";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import clsx from "clsx";
import { useActionPanel } from "@/providers/ActionPanelProvider";

const MoreModal = ({ className }: { className?: string }) => {
  const { setSelectedAction, toggleModal } = useActionPanel();

  const handleActionSelect = (action: "deposit" | "withdraw") => {
    console.log(action);
    setSelectedAction(action);
    toggleModal();
  };

  return (
    <div className={clsx(`flex items-center justify-end`, className)}>
      <div className="bg-white rounded-lg p-1 shadow-custom-sm w-full max-w-[203px] lg:max-w-[310px] border border-[#E4E4E7]">
        <ul>
          <li
            onClick={() => handleActionSelect("deposit")}
            className="flex lg:hidden items-center gap-[10px] pl-[10px] py-2 md:p-[14px] hover:bg-[#EDF1F7] transition-all duration-300 rounded-lg cursor-pointer text-[14px] leading-[16.94px] md:text-[16px] md:leading-[19.36px] font-inter font-medium"
          >
            <div
              className={clsx(
                "rounded-full size-5 grid place-content-center bg-[#EDF1F7]"
              )}
            >
              <ArrowUpRight className="text-[#000000] size-3" />
            </div>
            Deposit
          </li>
          <li
            onClick={() => handleActionSelect("withdraw")}
            className="flex lg:hidden items-center gap-[10px] pl-[10px] py-2 md:p-[14px] hover:bg-[#EDF1F7] transition-all duration-300 rounded-lg cursor-pointer text-[14px] leading-[16.94px] md:text-[16px] md:leading-[19.36px] font-inter font-medium"
          >
            <div
              className={clsx(
                "rounded-full size-5 grid place-content-center bg-[#EDF1F7]"
              )}
            >
              <ArrowDownRight className="text-[#000000] size-3" />
            </div>
            Withdraw
          </li>
          <li className="flex items-center gap-[10px] pl-[10px] py-2 md:p-[14px] hover:bg-[#EDF1F7] transition-all duration-300 rounded-lg cursor-pointer text-[14px] leading-[16.94px] md:text-[16px] md:leading-[19.36px] font-inter font-medium">
            <img
              src={"/static/deposit/apple.svg"}
              alt="Apple"
              className="size-[21px] lg:size-7"
            />
            Add to Apple Wallet
          </li>
          <li className="flex items-center gap-[10px] pl-[10px] py-2 md:p-[14px] hover:bg-[#EDF1F7] transition-all duration-300 rounded-lg cursor-pointer text-[14px] leading-[16.94px] md:text-[16px] md:leading-[19.36px] font-inter font-medium">
            <img
              src={"/static/deposit/card.svg"}
              alt="Card"
              className="size-[18px] lg:size-[23px]"
            />
            Add to Google Wallet
          </li>
          <li className="flex items-center gap-[10px] pl-[10px] py-2 md:p-[14px] hover:bg-[#E952521A] transition-all duration-300 rounded-lg cursor-pointer text-[14px] leading-[16.94px] md:text-[16px] md:leading-[19.36px] font-inter font-medium">
            <img
              src={"/static/deposit/pause.svg"}
              alt="Pause"
              className="size-[21px] lg:size-7"
            />
            Pause card
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoreModal;
