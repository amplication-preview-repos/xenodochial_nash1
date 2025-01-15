import { AccountCreateNestedManyWithoutCustomersInput } from "./AccountCreateNestedManyWithoutCustomersInput";
import { LoanCreateNestedManyWithoutCustomersInput } from "./LoanCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  accounts?: AccountCreateNestedManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanCreateNestedManyWithoutCustomersInput;
  phoneNumber?: string | null;
};
