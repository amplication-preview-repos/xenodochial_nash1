import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  interestRate?: SortOrder;
  loanAmount?: SortOrder;
  loanStatus?: SortOrder;
  loanTerm?: SortOrder;
  updatedAt?: SortOrder;
};
