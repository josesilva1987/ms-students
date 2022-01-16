import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitController } from "./unit.controller";
import { UnitService } from "./unit.service";

@Module({
    imports:[TypeOrmModule.forFeature([UnitEntity])],
    providers: [UnitService],
    exports: [UnitService],
    controllers: [UnitController],
})

export class UnitModule {}