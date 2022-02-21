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
import { ApiProperty } from "@nestjs/swagger";
import { SampleProjectWhereInput } from "./SampleProjectWhereInput";
import { Type } from "class-transformer";
import { SampleProjectOrderByInput } from "./SampleProjectOrderByInput";

@ArgsType()
class SampleProjectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SampleProjectWhereInput,
  })
  @Field(() => SampleProjectWhereInput, { nullable: true })
  @Type(() => SampleProjectWhereInput)
  where?: SampleProjectWhereInput;

  @ApiProperty({
    required: false,
    type: SampleProjectOrderByInput,
  })
  @Field(() => SampleProjectOrderByInput, { nullable: true })
  @Type(() => SampleProjectOrderByInput)
  orderBy?: SampleProjectOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SampleProjectFindManyArgs };
