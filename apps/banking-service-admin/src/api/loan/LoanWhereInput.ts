import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LoanWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  interestRate?: FloatNullableFilter;
  loanAmount?: FloatNullableFilter;
  loanStatus?: "Option1";
  loanTerm?: IntNullableFilter;
};
