import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitRepository } from "src/database/repository/units.repository";
import { InsertResult, UpdateResult } from "typeorm";

@Injectable()
export class UnitService {
    constructor(
        @InjectRepository(UnitEntity) private unitRespository: UnitRepository
    ) { }

    async getUnits(): Promise<UnitEntity[]> {
        try {
            return this.unitRespository.find();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getUnitById(id: number): Promise<UnitEntity> {
        try {
            return this.unitRespository.findOne({
                where: {
                    id
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getUnitBySchoolIdAndSystemId(systemId: number, schoolId: number): Promise<UnitEntity[]> {
        try {
            return await this.unitRespository.find({
                where: {
                    systemId,
                    schoolId
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async createUnit(payload: UnitEntity) {
        try {
            const existUnit = await this.getUnitBySchoolIdAndSystemId(payload.systemId, payload.schoolId);

            if (existUnit.length === 0) {
                payload.createdAt = new Date;
                payload.updatedAt = new Date;
                const result: InsertResult = await this.unitRespository.insert(payload);

                if (result.raw.affectedRows === 0) {
                    throw new HttpException('Error inserting Unit', HttpStatus.BAD_REQUEST);
                }

                if (Array.isArray(payload)) {
                    const mapped = result.raw.map((item: any) => {
                        return { id: item.id };
                    });

                    return mapped;
                }

                return { id: result.raw.insertId };
            } else {
                const result = await this.updateUnitById(existUnit[0].id, payload);
                return result;
            }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async updateUnitById(id: number, payload: UnitEntity): Promise<CreateOrUpdateResponseDto> {
        try {
            payload.updatedAt = new Date;
            const result: UpdateResult = await this.unitRespository.update(id, payload);
            return { id, rowAffected: result.affected };
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async updateUnitBySystemid(id: number, payload: UnitEntity): Promise<CreateOrUpdateResponseDto> {
        try {
            payload.updatedAt = new Date;
            const result: UpdateResult = await this.unitRespository.update(id, payload);

            return { id, rowAffected: result.affected };
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}