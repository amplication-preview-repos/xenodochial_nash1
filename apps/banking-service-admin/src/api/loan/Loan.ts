import { Customer } from "../customer/Customer";

export type Loan = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  interestRate: number | null;
  loanAmount: number | null;
  loanStatus?: "Option1" | null;
  loanTerm: number | null;
  updatedAt: Date;
};
