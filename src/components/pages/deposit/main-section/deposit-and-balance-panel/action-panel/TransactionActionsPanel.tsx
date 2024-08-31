"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Deposit from "./Deposit";
import MoreModal from "./MoreModal";
import Tabs from "./Tabs";
import Withdraw from "./Withdraw";

const TransactionActionsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("deposit");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "more") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="mt-5 hidden xl:flex flex-col gap-5 w-full">
      <Tabs onTabChange={handleTabChange} activeTab={activeTab} />
      <AnimatePresence mode="wait">
        {activeTab === "deposit" && !showModal && (
          <motion.div
            key="deposit"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Deposit />
          </motion.div>
        )}
        {activeTab === "withdraw" && !showModal && (
          <motion.div
            key="withdraw"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Withdraw />
          </motion.div>
        )}
        {showModal && <MoreModal />}
      </AnimatePresence>
    </section>
  );
};

export default TransactionActionsPanel;
