import { AccountUpdateManyWithoutCustomersInput } from "./AccountUpdateManyWithoutCustomersInput";
import { LoanUpdateManyWithoutCustomersInput } from "./LoanUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  accounts?: AccountUpdateManyWithoutCustomersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanUpdateManyWithoutCustomersInput;
  phoneNumber?: string | null;
};
