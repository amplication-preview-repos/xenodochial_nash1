import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type LoanUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  interestRate?: number | null;
  loanAmount?: number | null;
  loanStatus?: "Option1" | null;
  loanTerm?: number | null;
};
