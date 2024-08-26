import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../../../../utils/constants/faq";
import { useThemeObserver } from "../../../../../hooks/useThemeObserver";

interface FAQItemProps {
  item: typeof faqItems[0];
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ item, isOpen, toggleOpen }: FAQItemProps) => {
  const isDark = useThemeObserver();

  return (
    <div className="flex flex-col">
      <button
        className="flex justify-between items-center w-full text-left px-[24px] sm:px-[40px] py-[24px] bg-[#FBFBFB] dark:bg-[#101010] border-b border-[#E4E4E7] dark:border-[#1C1C1C]"
        onClick={toggleOpen}
      >
        <h2 className="font-inter-tight text-black dark:text-white text-[20px] sm:text-[24px] font-[700]">
          {item.question}
        </h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={
            "flex justify-center items-center size-[34px] sm:size-[54px] bg-white dark:bg-[#141414] border border-[#E4E4E7] dark:border-[#1C1C1C] p-[8px] sm:p-[12px] rounded-full"
          }
        >
          <ChevronDown
            size={26}
            color={isDark ? (isOpen ? "#5B5B5B" : "white") : "#5B5B5B"}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            className={
              "border-b border-[#E4E4E7] dark:border-[#1C1C1C] bg-white dark:bg-[#141414]"
            }
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <h3 className="font-inter-tight text-black dark:text-white p-[24px] sm:p-[40px] text-[16px] sm:text-[20px] font-[500]  leading-[25px] sm:leading-[32px]">
              {item.answer}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
