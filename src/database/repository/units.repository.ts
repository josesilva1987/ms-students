/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { UnitEntity } from "../entities/unit.entity";

@EntityRepository(UnitEntity)
export class UnitRepository extends Repository<UnitEntity> {}
