import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SampleProjectService } from "./sampleProject.service";
import { SampleProjectControllerBase } from "./base/sampleProject.controller.base";

@swagger.ApiTags("sample-projects")
@common.Controller("sample-projects")
export class SampleProjectController extends SampleProjectControllerBase {
  constructor(
    protected readonly service: SampleProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
