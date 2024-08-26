import symbols_history from "../../../../../assets/deposit/material-symbols_history.svg";

const TransactionHistory = () => {
  return (
    <section>
      <div className="flex items-center justify-between py-5 px-3">
        <div className="flex gap-[10px] items-center">
          <img
            src={"/static/deposit/material-symbols_history.svg"}
            alt="Symbol History"
          />
          <span className="font-inter-tight font-semibold text-[20px] leading-[24.2px] text-black">
            Transaction History
          </span>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
