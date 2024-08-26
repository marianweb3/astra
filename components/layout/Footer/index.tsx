import React from "react";
import Logo from "../Logo";
import LinksCol from "./LinksCol";

const Footer = () => {
  return (
    <footer className={"flex justify-center mb-[24px] px-4"}>
      <div
        className={
          "flex lg:flex-row gap-[24px] flex-col justify-between w-full max-w-[1600px] p-[24px] sm:p-[42px] lg:p-[60px] bg-gradient-to-b from-[#1F1F1F] dark:from-[#171719]  via-[#151515] dark:via-[#0D0D0F] to-[#0A0A0A] dark:to-[#0A0A0B] rounded-[16px]"
        }
      >
        <Logo logoBetaText={false} />
        <LinksCol />
      </div>
    </footer>
  );
};

export default Footer;
