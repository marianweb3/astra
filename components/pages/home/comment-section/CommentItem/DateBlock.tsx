import React from "react";
import { comments } from "../../../../../utils/constants/comments";
import { Calendar, Clock } from "lucide-react";

interface DateBlockProps {
  item: typeof comments[0];
}

const DateBlock = ({ item }: DateBlockProps) => {
  return (
    <>
      <div className={"flex items-center gap-[8px]"}>
        <Clock className="w-3 h-3 sm:w-4 sm:h-4" color={"#ABABAB"} />
        <h3
          className={
            "text-[#ABABAB] font-inter-tight text-[8px] sm:text-[12px] lg:text-[16px] font-[500] leading-[10px] sm:leading-[24px]"
          }
        >
          {item.post_time}
        </h3>
      </div>
      <div className={"flex items-center gap-[8px]"}>
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" color={"#ABABAB"} />
        <h3
          className={
            "text-[#ABABAB] font-inter-tight text-[8px] sm:text-[12px] lg:text-[16px] font-[500] leading-[10px] sm:leading-[24px]"
          }
        >
          {item.post_date}
        </h3>
      </div>
    </>
  );
};

export default DateBlock;
