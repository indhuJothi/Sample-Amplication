import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SampleProjectWhereInput = {
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  mobileNumber?: IntFilter;
  password?: StringFilter;
  user?: UserWhereUniqueInput;
};
