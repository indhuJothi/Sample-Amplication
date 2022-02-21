import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SampleProjectUpdateInput = {
  email?: string;
  firstName?: string;
  lastName?: string;
  mobileNumber?: number;
  password?: string;
  user?: UserWhereUniqueInput | null;
};
