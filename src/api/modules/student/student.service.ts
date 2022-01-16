import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { StudentEntity } from "src/database/entities/student.entity";
import { StudentRepository } from "src/database/repository/student.repository";
import { InsertResult, UpdateResult } from "typeorm";
import { StudentDto } from "./dto/student.dto";

@Injectable()
export class StudentService{
    constructor(@InjectRepository(StudentEntity) private studentRepository: StudentRepository) {}

    async getStudents(): Promise<StudentEntity[]>{
        try {
            return this.studentRepository.find();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getStudentById(id: number): Promise<StudentEntity>{
        try {
            return this.studentRepository.findOne({
                where: {
                    id
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getStudentByRA(RA: string): Promise<StudentEntity[]>{
        try {
            return this.studentRepository.find({
                where: {
                    RA
                },
            })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async createStudent(payload: StudentDto | StudentEntity){
        const result: InsertResult = await this.studentRepository.insert(payload);

        if(result.raw.affectedRows === 0){
            throw new HttpException('Error inserting Student', HttpStatus.BAD_REQUEST);
          }
      
          if (Array.isArray(payload)) {
            const mapped = result.raw.map((item: any) => {
              return { id: item.id };
            });
      
            return mapped;
          }
      
          return { id: result.raw.insertId };
    }

    async updateStudent(RA: string, payload: StudentDto): Promise<CreateOrUpdateResponseDto>{
        const result: UpdateResult = await this.studentRepository.update(RA, payload);

        return {RA, rowAffected: result.affected };
    }
}