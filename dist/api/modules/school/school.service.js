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
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const school_entity_1 = require("../../../database/entities/school.entity");
const school_repository_1 = require("../../../database/repository/school.repository");
let SchoolService = class SchoolService {
    constructor(schoolRespository) {
        this.schoolRespository = schoolRespository;
    }
    async getSchool() {
        try {
            return this.schoolRespository.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getSchoolById(id) {
        try {
            return this.schoolRespository.findOne({
                where: {
                    id
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getSchoolBySystemaId(systemId) {
        try {
            return this.schoolRespository.find({
                where: {
                    systemId
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createSchool(payload) {
        const result = await this.schoolRespository.insert(payload);
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
    async updateSchool(id, payload) {
        const result = await this.schoolRespository.update(id, payload);
        return { id, rowAffected: result.affected };
    }
};
SchoolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(school_entity_1.SchoolEntity)),
    __metadata("design:paramtypes", [school_repository_1.SchoolRepository])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map