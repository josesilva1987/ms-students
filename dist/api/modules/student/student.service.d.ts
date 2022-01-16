import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { StudentEntity } from "src/database/entities/student.entity";
import { StudentRepository } from "src/database/repository/student.repository";
import { StudentDto } from "./dto/student.dto";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: StudentRepository);
    getStudents(): Promise<StudentEntity[]>;
    getStudentById(id: number): Promise<StudentEntity>;
    getStudentByRA(RA: string): Promise<StudentEntity[]>;
    createStudent(payload: StudentDto | StudentEntity): Promise<any>;
    updateStudent(RA: string, payload: StudentDto): Promise<CreateOrUpdateResponseDto>;
}
