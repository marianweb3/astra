import { X } from "lucide-react";

const QuickSetup = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between py-5 px-3">
        <div className="flex gap-[10px] items-center">
          <img src={"/static/deposit/uil_setting.svg"} alt="Setting" />
          <span className="font-inter-tight font-semibold text-[20px] leading-[24.2px] text-black">
            Quick Setup
          </span>
        </div>
        <X color="#494949" />
      </div>
      <div className="py-[10px] px-5 flex gap-3">
        <div className="px-[17px] py-[14px] flex gap-[10px] items-center bg-[#000000] rounded-2xl">
          <img src={"/static/deposit/apple-wallet.svg"} alt="Apple Wallet" />
          <div className="flex flex-col">
            <span className="font-inter font-medium text-[14px] leading-[16.94px] text-white">
              Add to
            </span>
            <span className="font-inter font-medium text-[14px] leading-[16.94px] text-white">
              Apple Wallet
            </span>
          </div>
        </div>
        <div className="px-[17px] py-[14px] flex gap-[10px] items-center bg-[#000000] rounded-2xl">
          <img
            src={"/static/deposit/card.svg"}
            alt="Google Wallet"
            className="w-[39.07px] h-[33.96px]"
          />
          <div className="flex flex-col">
            <span className="font-inter font-medium text-[14px] leading-[16.94px] text-white">
              Add to
            </span>
            <span className="font-inter font-medium text-[14px] leading-[16.94px] text-white">
              Google Wallet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSetup;
