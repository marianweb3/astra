"use client";
import { links_first, links_second } from "@/utils/constants/footer";
import React from "react";

const LinksCol = () => {
  const handleClick = () => {
    const headerRef = document.getElementById("headerSection");

    if (headerRef) {
      const headerTop = headerRef.getBoundingClientRect().top;
      window.scrollTo({
        top: headerTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={
        "relative flex md:flex-row flex-col items-start md:items-stretch sm:gap-[70px] lg:gap-[120px] xl:gap-[185px]"
      }
    >
      <div className={"relative z-[10] flex flex-col gap-[20px] md:gap-[30px]"}>
        {links_first.map((group, index) => {
          return (
            <div key={index}>
              <h2
                className={
                  "whitespace-nowrap p-[10px] text-[#FFF] font-inter-tight font-[700] text-[20px] leading-[28px]"
                }
              >
                {group.title}
              </h2>
              {group.items.map((item, index) => (
                <h3
                  key={index}
                  className={
                    "whitespace-nowrap p-[10px] rounded-[10px] text-[#909195] font-inter-tight font-[500] text-[16px] leading-[28px] cursor-pointer hover:text-[#3F55F3] hover:bg-[#3f55f31a]"
                  }
                >
                  {item.text}
                </h3>
              ))}
            </div>
          );
        })}
      </div>

      <div className={"relative z-[10] flex flex-col gap-[20px] md:gap-[30px]"}>
        {links_second.map((group, index) => {
          return (
            <div key={index}>
              <h2
                className={
                  "whitespace-nowrap p-[10px] text-[#FFF] font-inter-tight font-[700] text-[20px] leading-[28px]"
                }
              >
                {group.title}
              </h2>
              {group.items.map((item, index) => (
                <h3
                  key={index}
                  className={`whitespace-nowrap p-[10px] rounded-[10px] text-[#909195] font-inter-tight font-[500] text-[16px] cursor-pointer hover:text-[#3F55F3] hover:bg-[#3f55f31a] ${
                    group.title.startsWith("Contact")
                      ? "leading-[23px]"
                      : "leading-[28px]"
                  }`}
                >
                  {item.text}
                </h3>
              ))}
            </div>
          );
        })}
      </div>

      <div
        className={
          "absolute md:static flex items-end justify-end w-full h-full z-[1]"
        }
      >
        <div
          onClick={handleClick}
          className={
            "flex justify-center items-center size-[60px] bg-[#3148F2] rounded-full cursor-pointer"
          }
        >
          <img src="/home/footer/gg_arrow-up.svg" alt="gg_arrow logo" />
        </div>
      </div>
    </nav>
  );
};

export default LinksCol;
