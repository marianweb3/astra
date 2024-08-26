import React from "react";
import { comments } from "../../../../../utils/constants/comments";
import AvatarAuthorBlock from "./AvatarAuthorBlock";
import DateBlock from "./DateBlock";

interface CommentItemProps {
  item: typeof comments[0];
}

const CommentItem = ({ item }: CommentItemProps) => {
  return (
    <div
      className={
        "flex-shrink-0 sm:max-w-[300px] lg:max-w-[431px] w-full h-full flex-col border border-[#E4E4E7] dark:border-[#1A1A1A] bg-[#FBFBFB] dark:bg-[#121212] rounded-[20px] overflow-hidden shadow"
      }
    >
      {/*Upper Block*/}
      <div
        className={
          "flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[18px] p-[10px] sm:p-[16px] lg:p-[24px] bg-[#FFF] dark:bg-[#0F0F0F]"
        }
      >
        <AvatarAuthorBlock item={item} />
        <h3
          className={
            "font-inter-tight text-black dark:text-white text-[10px] sm:text-[14px] lg:text-[20px] font-[500] leading-[14px] sm:leading-[28px]"
          }
        >
          {item.text}
        </h3>
      </div>

      {/*Lower Block*/}
      <div
        className={
          "flex gap-[20px] px-[10px] py-[8px] sm:px-[16px] sm:py-[12px] lg:px-[24px] lg:py-[16px] bg-[#FBFBFB] dark:bg-[#121212] border-t border-[#E4E4E7] dark:border-[#1A1A1A]"
        }
      >
        <DateBlock item={item} />
      </div>
    </div>
  );
};

export default CommentItem;
