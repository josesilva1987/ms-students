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
exports.SchoolController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const id_dto_1 = require("../../common/dto/id.dto");
const school_dto_1 = require("./dto/school.dto");
const school_service_1 = require("./school.service");
let SchoolController = class SchoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    async getSchools() {
        return this.schoolService.getSchool();
    }
    async getSchoolById(params) {
        return this.schoolService.getSchoolById(params.id);
    }
    async getSchoolBySystemId(params) {
        return this.schoolService.getSchoolBySystemaId(params.id);
    }
    async createSchool(payload) {
        return this.schoolService.createSchool(payload);
    }
    async UpdateSchool(params, payload) {
        return this.schoolService.updateSchool(params.id, payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Schools' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "getSchools", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Schools by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "getSchoolById", null);
__decorate([
    (0, common_1.Get)(':systemId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Schools by systemId' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "getSchoolBySystemId", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a School' }),
    (0, swagger_1.ApiBody)({ required: true, type: school_dto_1.SchoolDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: school_dto_1.SchoolDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [school_dto_1.SchoolDto]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "createSchool", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a School by systemId' }),
    (0, swagger_1.ApiBody)({ required: true, type: school_dto_1.SchoolDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: school_dto_1.SchoolDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto, school_dto_1.SchoolDto]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "UpdateSchool", null);
SchoolController = __decorate([
    (0, swagger_1.ApiTags)('Schools'),
    (0, common_1.Controller)('school'),
    __metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map