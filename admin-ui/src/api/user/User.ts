import { SampleProject } from "../sampleProject/SampleProject";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  sampleProjects?: Array<SampleProject>;
  updatedAt: Date;
  username: string;
};
