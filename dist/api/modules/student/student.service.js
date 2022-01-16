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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../../../database/entities/student.entity");
const student_repository_1 = require("../../../database/repository/student.repository");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async getStudents() {
        try {
            return this.studentRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStudentById(id) {
        try {
            return this.studentRepository.findOne({
                where: {
                    id
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStudentByRA(RA) {
        try {
            return this.studentRepository.find({
                where: {
                    RA
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createStudent(payload) {
        const result = await this.studentRepository.insert(payload);
        if (result.raw.affectedRows === 0) {
            throw new common_1.HttpException('Error inserting Student', common_1.HttpStatus.BAD_REQUEST);
        }
        if (Array.isArray(payload)) {
            const mapped = result.raw.map((item) => {
                return { id: item.id };
            });
            return mapped;
        }
        return { id: result.raw.insertId };
    }
    async updateStudent(RA, payload) {
        const result = await this.studentRepository.update(RA, payload);
        return { RA, rowAffected: result.affected };
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [student_repository_1.StudentRepository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map