"use client";
import { ActionPanelProvider } from "@/providers/ActionPanelProvider";
import DepositAndBalancePanel from "./deposit-and-balance-panel";
import TransactionHistoryPanel from "./transaction-history-panel";

const MainSection = () => {
  return (
    <ActionPanelProvider>
      <section className="mt-20 sm:mt-[100px] max-w-[1335px] mx-auto w-full relative z-10 md:px-4 2xl:px-0">
        <div className="flex justify-center items-center xl:items-start xl:justify-between gap-7 flex-col xl:flex-row 2xl:gap-[62px]">
          <DepositAndBalancePanel />
          <TransactionHistoryPanel />
        </div>
      </section>
    </ActionPanelProvider>
  );
};

export default MainSection;
