"use client";
import { Ellipsis } from "lucide-react";
import { useActionPanel } from "@/providers/ActionPanelProvider";
import clsx from "clsx";
import MoreModal from "../deposit-and-balance-panel/action-panel/MoreModal";

interface BalanceProps {
  className?: string;
}

const Balance = ({ className }: BalanceProps) => {
  const { toggleModal, isModalOpen } = useActionPanel();
  return (
    <section
      className={clsx(
        "flex-col gap-[18px] w-full px-5 md:px-0 relative",
        className
      )}
    >
      <div className={clsx("flex flex-col gap-2 w-full")}>
        <div className={clsx("flex items-center justify-between")}>
          <span
            className={clsx(
              "font-inter-tight font-semibold text-[14px] leading-[16.94px] md:text-[24px] md:leading-[29.04px] text-white"
            )}
          >
            My Balance
          </span>
          <div className={clsx("flex gap-2")}>
            <div
              className={clsx(
                "bg-white rounded-full grid place-content-center size-[30px] md:size-10",
                "hover:bg-gray-200 hover:scale-105 transition-transform duration-200 ease-in-out"
              )}
            >
              <img
                src={"/static/deposit/apple.svg"}
                alt="Apple logo"
                className={clsx("size-[21px] md:size-7")}
              />
            </div>
            <div
              className={clsx(
                "bg-white rounded-full grid place-content-center size-[30px] md:size-10",
                "hover:bg-gray-200 hover:scale-105 transition-transform duration-200 ease-in-out"
              )}
            >
              <img
                src={"/static/deposit/card.svg"}
                alt="Card logo"
                className={clsx("size-[14px] md:size-7")}
              />
            </div>
            <div
              onClick={toggleModal}
              className={clsx(
                "bg-white rounded-full grid place-content-center size-[30px] md:size-10 lg:hidden",
                "hover:bg-gray-200 hover:scale-105 transition-transform duration-200 ease-in-out"
              )}
            >
              <Ellipsis />
            </div>
          </div>
        </div>
        <span
          className={clsx(
            "font-inter-tight font-semibold text-[40px] leading-[48.4px] md:text-[80px] md:leading-[96.8px] text-white"
          )}
        >
          <span className={clsx("text-[#FFFFFF4D]")}>$</span> 1674.41
        </span>
      </div>
      {isModalOpen && (
        <div className="lg:hidden flex absolute top-1/2 right-[6px] z-20">
          <MoreModal className="" />
        </div>
      )}
      <p
        className={clsx(
          "font-inter-tight font-medium text-[20px] leading-[24.2px] text-white/80 md:block hidden"
        )}
      >
        Daily spending limit: 5000$
      </p>
    </section>
  );
};

export default Balance;
