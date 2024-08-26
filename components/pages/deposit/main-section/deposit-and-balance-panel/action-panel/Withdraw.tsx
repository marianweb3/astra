"use client";
import React, { useState } from "react";
import { Pencil, PencilLine, X } from "lucide-react";
import NetworkDropdown from "@/components/common/dropdowns/NetworkDropdown";
import { useActionPanel } from "@/providers/ActionPanelProvider";

const Withdraw = () => {
  const [selectedNetwork, setSelectedNetwork] = useState({
    name: "Polygon",
    icon: "/path-to-polygon-icon.svg",
  });
  const { closeModal } = useActionPanel();
  const [isEditable, setIsEditable] = useState(false);
  const [walletAddress, setWalletAddress] = useState(
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
  );

  const handleIconClick = () => {
    setIsEditable(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

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
          Withdraw
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
      <div className="space-y-[10px]">
        <label className="block text-black font-semibold text-[16px] leading-[19.36px] p-[6px] capitalize">
          enter wallet address
        </label>
        <div className="relative flex items-center border border-[#E4E4E7] rounded-[16px] px-[16px]">
          <input
            type="text"
            value={walletAddress}
            onChange={handleInputChange}
            className="w-full py-4 text-[#808080] placeholder:text-[#808080] font-inter font-semibold text-[14px] leading-[16.94px] bg-transparent focus:outline-none"
            readOnly={!isEditable}
          />
          <PencilLine
            className="absolute right-4 text-black cursor-pointer w-[20px] h-[20px]"
            onClick={handleIconClick}
          />
        </div>
      </div>

      <div className="space-y-[10px]">
        <label className="block text-black font-semibold text-[16px] leading-[19.36px] p-[6px] capitalize">
          Enter Amount
        </label>
        <div className="rounded-2xl border border-[#E4E4E7] p-5 flex items-center justify-between">
          <div className="flex flex-col gap-[6px]">
            <span className="font-inter font-semibold text-[24px] leading-[29.05px] text-black">
              250.50
            </span>
            <span className="font-inter font-medium text-[16px] leading-[19.36px] text-[#00000080]">
              = $366.35
            </span>
          </div>
          <div className="flex items-end flex-col gap-[6px]">
            <div className="bg-white border border-[#E4E4E7] rounded-md py-[6px] px-[10px]">
              <span className="font-inter font-semibold text-[16px] leading-[19.36px] text-black">
                Max
              </span>
            </div>
            <span className="font-inter font-medium text-[16px] leading-[19.36px] text-[#00000080]">
              Balance: <span className="font-semibold">3467.54</span>
            </span>
          </div>
        </div>
      </div>
      <button className="py-[15.5px] md:py-5 w-full gird place-content-center bg-[#3148F2] rounded-full font-inter font-semibold text-[16px] leading-[19.36px] md:text-[20px] md:leading-[24.2px] text-white">
        Confirm
      </button>
    </div>
  );
};

export default Withdraw;
