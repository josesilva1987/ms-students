import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { ResponsibleEntity } from "src/database/entities/responsible.entity";
import { ResponsableRepository } from "src/database/repository/responsible.repository";
import { InsertResult, UpdateResult } from "typeorm";
import { StudentService } from "../student/student.service";
import { CreateResponsibleDto } from "./dto/createResponsible.dto";
import { ResponsibleDto } from "./dto/responsible.dto";

@Injectable()
export class ResponsibleService {
    constructor(
        @InjectRepository(ResponsibleEntity)
        private responsibleRepository: ResponsableRepository,
        private studentService: StudentService
    ) { }

    async getResponsibles(): Promise<ResponsibleEntity[]> {
        try {
            return this.responsibleRepository.find()
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getResponsibleById(id: number): Promise<ResponsibleEntity> {
        try {
            return this.responsibleRepository.findOne({
                where: {
                    id
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getResponsibleByDocument(document: string): Promise<ResponsibleEntity> {
        try {
            return this.responsibleRepository.findOne({
                where: {
                    document
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async updateResponsible(id: number, payload: ResponsibleDto): Promise<CreateOrUpdateResponseDto> {
        try {
            const result: UpdateResult = await this.responsibleRepository.update(id, payload);

            return { id, rowAffected: result.affected }
        }
        catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async createResponsible(payload: ResponsibleDto) {
        try {
            const existStudent = await this.studentService.getStudentByRA(payload.RA);

            if (existStudent.length == 0) return `O RA: ${payload.RA} n??o existe na base de dados.`;

            const payloadResponsible: CreateResponsibleDto = {
                document: payload.document,
                name: payload.name,
                email: payload.email,
                kinship: payload.kinship,
                createdAt: new Date,
                updatedAt: new Date,
                studentId: existStudent[0].id
            }

            const result: InsertResult = await this.responsibleRepository.insert(payloadResponsible);

            if (result.raw.affectedRows === 0) {
                throw new HttpException('Error inserting school', HttpStatus.BAD_REQUEST);
            }

            if (Array.isArray(payload)) {
                const mapped = result.raw.map((item: any) => {
                    return { id: item.id };
                });

                return mapped;
            }

            return { id: result.raw.insertId };
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}