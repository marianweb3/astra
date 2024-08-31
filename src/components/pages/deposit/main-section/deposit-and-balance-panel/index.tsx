"use client";
import { motion, AnimatePresence } from "framer-motion";
import Balance from "../transaction-history-panel/Balance";
import Deposit from "./action-panel/Deposit";
import TransactionActionsPanel from "./action-panel/TransactionActionsPanel";
import Withdraw from "./action-panel/Withdraw";
import { useActionPanel } from "../../../../../providers/ActionPanelProvider";
import { useEffect } from "react";
import CreditCard from "./CreditCard";

const DepositAndBalancePanel = () => {
  const { selectedAction, isModalOpen, closeModal } = useActionPanel();

  useEffect(() => {
    if (selectedAction) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAction]);

  return (
    <>
      <section className="max-w-[538px] w-full space-y-5 relative z-10">
        <Balance className="flex xl:hidden" />
        <CreditCard />
        <TransactionActionsPanel />
      </section>

      <AnimatePresence>
        {selectedAction && (
          <>
            {/* Blur background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={closeModal} // Close the modal when the background is clicked
            />
            {/* Modal content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 w-full p-[10px] z-50"
            >
              {selectedAction === "deposit" && <Deposit />}
              {selectedAction === "withdraw" && <Withdraw />}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DepositAndBalancePanel;
