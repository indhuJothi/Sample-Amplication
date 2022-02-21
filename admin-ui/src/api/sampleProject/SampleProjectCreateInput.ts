import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SampleProjectCreateInput = {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  password: string;
  user?: UserWhereUniqueInput | null;
};
