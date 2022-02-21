import { User } from "../user/User";

export type SampleProject = {
  createdAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  mobileNumber: number;
  password: string;
  updatedAt: Date;
  user?: User | null;
};
