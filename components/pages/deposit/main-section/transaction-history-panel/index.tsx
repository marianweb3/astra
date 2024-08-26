import { transactions } from "../../../../../constants/transactions";
import Balance from "./Balance";
import QuickSetup from "./QuickSetup";
import TransactionHistory from "./TransactionHistory";
import TransactionItem from "./TransactionItem";

const TransactionHistoryPanel = () => {
  return (
    <section className="max-w-[755px] w-full flex flex-col gap-[46px]">
      <Balance className="hidden xl:flex" />
      <div>
        <QuickSetup />
        <TransactionHistory />
        <div className="w-full bg-white rounded-2xl md:border md:border-[#E4E4E7] divide-y divide-[#E4E4E7]">
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} {...transaction} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionHistoryPanel;
