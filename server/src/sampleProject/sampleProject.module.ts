import { Module } from "@nestjs/common";
import { SampleProjectModuleBase } from "./base/sampleProject.module.base";
import { SampleProjectService } from "./sampleProject.service";
import { SampleProjectController } from "./sampleProject.controller";
import { SampleProjectResolver } from "./sampleProject.resolver";

@Module({
  imports: [SampleProjectModuleBase],
  controllers: [SampleProjectController],
  providers: [SampleProjectService, SampleProjectResolver],
  exports: [SampleProjectService],
})
export class SampleProjectModule {}
