import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface NetworkOption {
  name: string;
  icon: string;
}

interface NetworkDropdownProps {
  options: NetworkOption[];
  selected: NetworkOption;
  onSelect: (network: NetworkOption) => void;
  className?: string;
  textClassName?: string;
  contaienrStyles?: string;
}

const NetworkDropdown: React.FC<NetworkDropdownProps> = ({
  options,
  selected,
  onSelect,
  className,
  textClassName,
  contaienrStyles,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (network: NetworkOption) => {
    onSelect(network);
    setIsOpen(false);
  };

  return (
    <div className={clsx("relative", contaienrStyles)}>
      <div
        className={clsx(
          "flex items-center justify-between p-3 border border-[#E4E4E7] rounded-2xl bg-[#FCFCFC] cursor-pointer",
          className
        )}
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-1">
          <img src={selected.icon} alt={selected.name} className="w-6 h-6" />
          <span
            className={clsx(
              "font-medium text-[20px] leading-[24.2px] text-black",
              textClassName
            )}
          >
            {selected.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-black" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute z-10 w-full mt-2 bg-white border border-[#E4E4E7] rounded-lg shadow-lg overflow-hidden"
          >
            {options.map((option) => (
              <div
                key={option.name}
                className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                <img
                  src={option.icon}
                  alt={option.name}
                  className="w-6 h-6 mr-2"
                />
                <span className="text-black">{option.name}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NetworkDropdown;
