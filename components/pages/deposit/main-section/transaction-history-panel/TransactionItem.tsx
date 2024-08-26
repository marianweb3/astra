import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import clsx from "clsx";
import Amount from "./Amount";

interface TransactionItemProps {
  time: string;
  date: string;
  description: string;
  type: "deposit" | "withdraw" | "purchase";
  amount: string;
  address?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  time,
  date,
  description,
  type,
  amount,
  address,
}) => {
  const isWithdraw = type === "withdraw";
  const isDeposit = type === "deposit";

  return (
    <div className="flex justify-between items-center py-5 px-6 gap-5 xl:gap-0">
      <div className="flex  flex-col xl:flex-row xl:items-center gap-[10px] md:gap-8 2xl:gap-16 w-full">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="font-inter-tight font-medium text-[20px] leading-[24.2px] text-black break-all">
              {time}
            </div>

            <div className="font-inter-tight font-medium text-[#0000004D] text-[16px] leading-[19.36px]">
              {date}
            </div>
          </div>
          <Amount
            isWithdraw={isWithdraw}
            isDeposit={isDeposit}
            amount={amount}
            className="xl:hidden block"
          />
        </div>
        <div className="flex gap-[10px] xl:block">
          <div className="flex items-center gap-2">
            {isWithdraw || isDeposit ? (
              <div
                className={clsx(
                  "rounded-full size-5 grid place-content-center",
                  isWithdraw
                    ? "bg-[#F5C8C5]"
                    : isDeposit
                    ? "bg-[#C5F5D5]"
                    : "bg-gray-100"
                )}
              >
                {isWithdraw ? (
                  <ArrowDownRight className="text-[#5B2824] size-3" />
                ) : isDeposit ? (
                  <ArrowUpRight className="text-[#245B36] size-3" />
                ) : null}
              </div>
            ) : null}
            <div className="uppercase font-inter-tight font-medium text-[16px] leading-[19.36px] text-black">
              {description}
            </div>
          </div>
          {address && (
            <span className="text-[#4C7FB2] font-inter-tight font-medium text-[16px] leading-[19.36px] md:max-w-full max-w-[195.96px] overflow-hidden">
              {address}
            </span>
          )}
        </div>
      </div>
      <Amount
        isWithdraw={isWithdraw}
        isDeposit={isDeposit}
        amount={amount}
        className="xl:block hidden"
      />
    </div>
  );
};

export default TransactionItem;
