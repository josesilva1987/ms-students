import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { SchoolEntity } from "src/database/entities/school.entity";
import { SchoolRepository } from "src/database/repository/school.repository";
import { InsertResult, UpdateResult } from "typeorm";
import { SchoolDto } from "./dto/school.dto";

@Injectable()
export class SchoolService {
    constructor(
        @InjectRepository(SchoolEntity) private schoolRespository: SchoolRepository
    ) {}

    async getSchool(): Promise<SchoolEntity[]>{
        try {
            return this.schoolRespository.find();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getSchoolById(id: number): Promise<SchoolEntity>{
        try {
            return this.schoolRespository.findOne({
                where: {
                    id
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getSchoolBySystemaId(systemId: number): Promise<SchoolEntity[]>{
        try {
            return this.schoolRespository.find({
                where: {
                    systemId
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async createSchool(payload: SchoolDto | SchoolEntity){
        const result: InsertResult = await this.schoolRespository.insert(payload);

        if(result.raw.affectedRows === 0){
            throw new HttpException('Error inserting school', HttpStatus.BAD_REQUEST);
          }
      
          if (Array.isArray(payload)) {
            const mapped = result.raw.map((item: any) => {
              return { id: item.id };
            });
      
            return mapped;
          }
      
          return { id: result.raw.insertId };
    }

    async updateSchool(id: number, payload: SchoolDto): Promise<CreateOrUpdateResponseDto>{
        const result: UpdateResult = await this.schoolRespository.update(id, payload);

        return {id, rowAffected: result.affected };
    }
}