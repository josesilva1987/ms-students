import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitRepository } from "src/database/repository/units.repository";
import { InsertResult, UpdateResult } from "typeorm";
import { UnitDto } from "./dto/unit.dto";

@Injectable()
export class UnitService {
    constructor(
        @InjectRepository(UnitEntity) private unitRespository: UnitRepository
    ) {}

    async getUnits(): Promise<UnitEntity[]>{
        try {
            return this.unitRespository.find();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getUnitById(id: number): Promise<UnitEntity>{
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

    async getUnitBySystemId(systemId: number): Promise<UnitEntity[]>{
        try {
            return this.unitRespository.find({
                where: {
                    systemId
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async createUnit(payload: UnitDto | UnitEntity){
        const result: InsertResult = await this.unitRespository.insert(payload);

        if(result.raw.affectedRows === 0){
            throw new HttpException('Error inserting Unit', HttpStatus.BAD_REQUEST);
          }
      
          if (Array.isArray(payload)) {
            const mapped = result.raw.map((item: any) => {
              return { id: item.id };
            });
      
            return mapped;
          }
      
          return { id: result.raw.insertId };
    }

    async updateUnitById(id: number, payload: UnitDto): Promise<CreateOrUpdateResponseDto>{
        const result: UpdateResult = await this.unitRespository.update(id, payload);

        return {id, rowAffected: result.affected };
    }

    async updateUnitBySystemid(id: number, payload: UnitDto): Promise<CreateOrUpdateResponseDto>{
        const result: UpdateResult = await this.unitRespository.update(id, payload);

        return {id, rowAffected: result.affected };
    }
}