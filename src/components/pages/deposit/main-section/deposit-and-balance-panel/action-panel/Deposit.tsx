"use client";
import { useState } from "react";
import { X } from "lucide-react";
import NetworkDropdown from "@/components/common/dropdowns/NetworkDropdown";
import { useActionPanel } from "@/providers/ActionPanelProvider";

const Deposit = () => {
  const { closeModal } = useActionPanel();

  const [selectedNetwork, setSelectedNetwork] = useState({
    name: "Polygon",
    icon: "/path-to-polygon-icon.svg",
  });
  const [selectedCurrency, setSelectedCurrenncy] = useState({
    name: "usdc",
    icon: "/path-to-polygon-icon.svg",
  });

  const networkOptions = [
    {
      name: "Polygon",
      icon: "/path-to-polygon-icon.svg",
    },
    {
      name: "Ethereum",
      icon: "/path-to-ethereum-icon.svg",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-[#E4E4E7] shadow-custom-sm py-[10px] md:py-5 px-4 flex flex-col gap-[14px] lg:gap-6 bg-white">
      <div className="w-full flex items-center justify-between py-[10.5px] xl:hidden">
        <span className="font-inter font-bold text-[24px] leading-[29.05px] text-black">
          Deposit
        </span>
        <X className="cursor-pointer" onClick={closeModal} />
      </div>
      <div className="space-y-[10px]">
        <label className="block text-black font-semibold text-[16px] leading-[19.36px] p-[6px]">
          Network
        </label>
        <NetworkDropdown
          options={networkOptions}
          selected={selectedNetwork}
          onSelect={setSelectedNetwork}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="p-4 flex items-center justify-between bg-[#F7F8FA] rounded-2xl">
          <span className="font-inter font-semibold text-[32px] leading-[38.73px] text-black">
            $0.0
          </span>
          <NetworkDropdown
            options={networkOptions}
            selected={selectedCurrency}
            onSelect={setSelectedCurrenncy}
            className="p-2 w-full"
            contaienrStyles="max-w-[138px] w-full"
            textClassName="text-[16px] leading-[19.36px] uppercase"
          />
        </div>
        <div className="w-full flex justify-between">
          <span className="font-inter font-medium text-[14px] leading-[16.94px] text-[#00000080]">
            Available to Deposit: <span className="text-black">$0.00</span>
          </span>
          <span className="font-inter font-medium text-[14px] leading-[16.94px] text-[#00000080]">
            Minimum Deposit: <span className="text-black">$10.00</span>
          </span>
        </div>
      </div>
      <div className="rounded-2xl border border-[#E4E4E7] flex flex-col divide-y divide-[#E4E4E7] w-full">
        <div className="py-5 px-4 flex items-center justify-between">
          <span className="font-inter text-[#00000080] font-medium text-[16px] leading-[19.36px]">
            Transfer Cost
          </span>
          <span className="font-inter text-[#00000080] font-medium text-[16px] leading-[19.36px]">
            $0.00
          </span>
        </div>
        <div className="py-5 px-4 flex items-center justify-between">
          <span className="font-inter text-[#00000080] font-medium text-[16px] leading-[19.36px]">
            Operations
          </span>
          <span className="font-inter text-[#00000080] font-medium text-[16px] leading-[19.36px]">
            $0.00
          </span>
        </div>
        <div className="py-5 px-4 flex items-center justify-between">
          <span className="font-inter text-[#000000] font-semibold text-[20px] leading-[24.2px]">
            Total after Fees
          </span>
          <span className="font-inter text-[#000000] font-semibold text-[20px] leading-[24.2px]">
            $0.00
          </span>
        </div>
      </div>
      <button className="py-[15.5px] md:py-5 w-full gird place-content-center bg-[#3148F2] rounded-full font-inter font-semibold text-[16px] leading-[19.36px] md:text-[20px] md:leading-[24.2px] text-white">
        Confirm
      </button>
    </div>
  );
};

export default Deposit;
