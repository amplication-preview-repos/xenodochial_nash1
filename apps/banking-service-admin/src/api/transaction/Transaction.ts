import { Account } from "../account/Account";

export type Transaction = {
  account?: Account | null;
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  transactionType?: "Option1" | null;
  updatedAt: Date;
};
