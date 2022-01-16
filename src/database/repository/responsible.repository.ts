/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { ResponsibleEntity } from "../entities/responsible.entity";

@EntityRepository(ResponsibleEntity)
export class ResponsableRepository extends Repository<ResponsibleEntity> {}


