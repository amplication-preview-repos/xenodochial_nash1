import { Account } from "../account/Account";
import { Loan } from "../loan/Loan";

export type Customer = {
  accounts?: Array<Account>;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loans?: Array<Loan>;
  phoneNumber: string | null;
  updatedAt: Date;
};
