type TransactionType = "deposit" | "withdraw" | "purchase";

interface Transaction {
  time: string;
  date: string;
  description: string;
  type: TransactionType;
  amount: string;
  address?: string;
}

export const transactions: Transaction[] = [
  {
    time: "11:30 PM",
    date: "Friday, November 17, 2024",
    description: "WALMART #4567, AUSTIN, TXUS",
    type: "purchase",
    amount: "-$29.56",
  },
  {
    time: "11:30 PM",
    date: "Friday, November 17, 2024",
    description: "SHELL OIL 1234, HOUSTON, TXUS",
    type: "purchase",
    amount: "-$313.65",
  },
  {
    time: "11:30 PM",
    date: "Friday, November 17, 2024",
    description: "WITHDRAW",
    type: "withdraw",
    amount: "-$1,100.00",
    address: "1FfmbHfnpaZjKFvyi1okTjJusN455paPH",
  },
  {
    time: "11:30 PM",
    date: "Friday, November 17, 2024",
    description: "DEPOSIT",
    type: "deposit",
    amount: "+$1,000.00",
  },
  {
    time: "11:30 PM",
    date: "Friday, November 17, 2024",
    description: "AMZN MKTP US*3G8H6D, SEATTLE, WAUS",
    type: "purchase",
    amount: "-$45.00",
  },
  {
    time: "11:30 PM",
    date: "Friday, November 17, 2024",
    description: "STARBUCKS #2345, DALLAS, TXUS",
    type: "purchase",
    amount: "-$6.50",
  },
];
