import React from "react";
import { comments } from "../../../../../utils/constants/comments";

interface AvatarAuthorProps {
  item: typeof comments[0];
}

const AvatarAuthorBlock = ({ item }: AvatarAuthorProps) => {
  return (
    <div className={"flex gap-[10px] sm:gap-[14px] lg:gap-[20px]"}>
      <div
        className={
          "flex justify-center items-center size-[28px] sm:size-[40px] lg:size-[60px] rounded-full overflow-hidden"
        }
      >
        <img src={item.avatarUrl} alt="avatarUrl logo" />
      </div>

      <div className={"flex flex-col"}>
        <h2
          className={
            "font-inter-tight text-black dark:text-white text-[12px] sm:text-[16px] lg:text-[24px] font-[600]"
          }
        >
          {item.author}
        </h2>

        <h3
          className={
            "font-inter-tight text-[#949494] text-[8px] sm:text-[12px] lg:text-[16px] font-[500]"
          }
        >
          {item.nickname}
        </h3>
      </div>
    </div>
  );
};

export default AvatarAuthorBlock;
