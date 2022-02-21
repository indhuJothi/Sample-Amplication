import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SampleProjectServiceBase } from "./base/sampleProject.service.base";

@Injectable()
export class SampleProjectService extends SampleProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
