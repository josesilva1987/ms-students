"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const id_dto_1 = require("../../common/dto/id.dto");
const ra_dto_1 = require("../../common/dto/ra.dto");
const student_dto_1 = require("./dto/student.dto");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async getStudents() {
        return this.studentService.getStudents();
    }
    async getStudentsById(params) {
        return this.studentService.getStudentById(params.id);
    }
    async getStudentsByRA(params) {
        return this.studentService.getStudentByRA(params.RA);
    }
    async createSchool(payload) {
        return this.studentService.createStudent(payload);
    }
    async UpdateSchool(params, payload) {
        return this.studentService.updateStudent(params.RA, payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all students' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a student by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentsById", null);
__decorate([
    (0, common_1.Get)(':RA'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a student by RA' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ra_dto_1.RADto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentsByRA", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a Student' }),
    (0, swagger_1.ApiBody)({ required: true, type: student_dto_1.StudentDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: student_dto_1.StudentDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createSchool", null);
__decorate([
    (0, common_1.Put)(':RA'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a School by RA' }),
    (0, swagger_1.ApiBody)({ required: true, type: student_dto_1.StudentDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: student_dto_1.StudentDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ra_dto_1.RADto, student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "UpdateSchool", null);
StudentController = __decorate([
    (0, swagger_1.ApiTags)('Students'),
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map