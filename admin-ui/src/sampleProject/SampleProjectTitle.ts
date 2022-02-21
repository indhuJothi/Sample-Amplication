import { SampleProject as TSampleProject } from "../api/sampleProject/SampleProject";

export const SAMPLEPROJECT_TITLE_FIELD = "firstName";

export const SampleProjectTitle = (record: TSampleProject): string => {
  return record.firstName || record.id;
};
