import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SampleProjectResolverBase } from "./base/sampleProject.resolver.base";
import { SampleProject } from "./base/SampleProject";
import { SampleProjectService } from "./sampleProject.service";

@graphql.Resolver(() => SampleProject)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SampleProjectResolver extends SampleProjectResolverBase {
  constructor(
    protected readonly service: SampleProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
