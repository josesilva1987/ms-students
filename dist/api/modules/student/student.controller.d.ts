import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { RADto } from "src/api/common/dto/ra.dto";
import { StudentEntity } from "src/database/entities/student.entity";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<StudentEntity[]>;
    getStudentsById(params: IdDto): Promise<StudentEntity>;
    getStudentsByRA(params: RADto): Promise<StudentEntity[]>;
    createSchool(payload: StudentDto): Promise<StudentDto | CreateOrUpdateResponseDto>;
    UpdateSchool(params: RADto, payload: StudentDto): Promise<CreateOrUpdateResponseDto>;
}
