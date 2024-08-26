import clsx from "clsx";

interface AmountProps {
  isWithdraw?: boolean;
  isDeposit?: boolean;
  amount: string;
  className?: string;
}

const Amount: React.FC<AmountProps> = ({
  isWithdraw,
  isDeposit,
  amount,
  className,
}) => {
  return (
    <div
      className={clsx(
        "font-inter-tight font-medium text-[20px] leading-[24.2px]",
        isWithdraw
          ? "text-[#5B2824] bg-[#F5C8C5] rounded-[10px] p-[6px]"
          : isDeposit
          ? "text-[#245B36] bg-[#C5F5D5] rounded-[10px] p-[6px]"
          : "text-black",
        className
      )}
    >
      {amount}
    </div>
  );
};

export default Amount;
