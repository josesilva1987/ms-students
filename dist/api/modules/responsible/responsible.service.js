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
exports.ResponsibleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const responsible_entity_1 = require("../../../database/entities/responsible.entity");
const responsible_repository_1 = require("../../../database/repository/responsible.repository");
const student_service_1 = require("../student/student.service");
let ResponsibleService = class ResponsibleService {
    constructor(responsibleRepository, studentService) {
        this.responsibleRepository = responsibleRepository;
        this.studentService = studentService;
    }
    async getResponsibles() {
        try {
            return this.responsibleRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getResponsibleById(id) {
        try {
            return this.responsibleRepository.findOne({
                where: {
                    id
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getResponsibleByDocument(document) {
        try {
            return this.responsibleRepository.findOne({
                where: {
                    document
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateResponsible(id, payload) {
        try {
            const result = await this.responsibleRepository.update(id, payload);
            return { id, rowAffected: result.affected };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createResponsible(payload) {
        try {
            const existStudent = await this.studentService.getStudentByRA(payload.RA);
            if (existStudent.length == 0)
                return `O RA: ${payload.RA} não existe na base de dados.`;
            const payloadResponsible = {
                document: payload.document,
                name: payload.name,
                email: payload.email,
                kinship: payload.kinship,
                createdAt: new Date,
                updatedAt: new Date,
                studentId: existStudent[0].id
            };
            const result = await this.responsibleRepository.insert(payloadResponsible);
            if (result.raw.affectedRows === 0) {
                throw new common_1.HttpException('Error inserting school', common_1.HttpStatus.BAD_REQUEST);
            }
            if (Array.isArray(payload)) {
                const mapped = result.raw.map((item) => {
                    return { id: item.id };
                });
                return mapped;
            }
            return { id: result.raw.insertId };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
ResponsibleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(responsible_entity_1.ResponsibleEntity)),
    __metadata("design:paramtypes", [responsible_repository_1.ResponsableRepository,
        student_service_1.StudentService])
], ResponsibleService);
exports.ResponsibleService = ResponsibleService;
//# sourceMappingURL=responsible.service.js.map