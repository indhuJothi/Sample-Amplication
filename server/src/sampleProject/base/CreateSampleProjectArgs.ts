/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { SampleProjectCreateInput } from "./SampleProjectCreateInput";

@ArgsType()
class CreateSampleProjectArgs {
  @Field(() => SampleProjectCreateInput, { nullable: false })
  data!: SampleProjectCreateInput;
}

export { CreateSampleProjectArgs };