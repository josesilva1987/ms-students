import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { RADto } from "src/api/common/dto/ra.dto";
import { StudentEntity } from "src/database/entities/student.entity";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@ApiTags('Students')
@Controller('students')
export class StudentController{
    constructor(private studentService: StudentService) {}

    @Get()
    @ApiOperation({ summary: 'Get all students' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getStudents(): Promise<StudentEntity[]>{
        return this.studentService.getStudents();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a student by Id' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getStudentsById(@Param() params: IdDto): Promise<StudentEntity>{
        return this.studentService.getStudentById(params.id);
    }

    @Get(':RA')
    @ApiOperation({ summary: 'Get a student by RA' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getStudentsByRA(@Param() params: RADto): Promise<StudentEntity[]>{
        return this.studentService.getStudentByRA(params.RA);
    }

    @Post()
    @ApiOperation({ summary: 'Create a Student' })
    @ApiBody({ required: true, type: StudentDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: StudentDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async createSchool(@Body() payload: StudentEntity): Promise<CreateOrUpdateResponseDto>{
        return this.studentService.createStudent(payload);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a School by ID' })
    @ApiBody({ required: true, type: StudentDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: StudentDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async UpdateSchool(@Param() params: IdDto, @Body() payload: StudentEntity): Promise<CreateOrUpdateResponseDto>{
        return this.studentService.updateStudentById(params.id, payload);
    }
}