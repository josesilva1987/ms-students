/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { RegistrationEntity } from "../entities/registration.entity";

@EntityRepository(RegistrationEntity)
export class RegistrationRepository extends Repository<RegistrationEntity> {}


