/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { SchoolEntity } from "../entities/school.entity";

@EntityRepository(SchoolEntity)
export class SchoolRepository extends Repository<SchoolEntity> {}


