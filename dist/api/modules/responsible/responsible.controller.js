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
exports.ResponsibleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const document_dto_1 = require("../../common/dto/document.dto");
const id_dto_1 = require("../../common/dto/id.dto");
const responsible_dto_1 = require("./dto/responsible.dto");
const responsible_service_1 = require("./responsible.service");
let ResponsibleController = class ResponsibleController {
    constructor(responsibleService) {
        this.responsibleService = responsibleService;
    }
    async getResponsibles() {
        return this.responsibleService.getResponsibles();
    }
    async getResponsibleById(params) {
        return this.responsibleService.getResponsibleById(params.id);
    }
    async getResponsibleByDocument(params) {
        return this.responsibleService.getResponsibleByDocument(params.document);
    }
    async UpdateSchool(params, payload) {
        return this.responsibleService.updateResponsible(params.id, payload);
    }
    async createSchool(payload) {
        return this.responsibleService.createResponsible(payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all responsible' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResponsibleController.prototype, "getResponsibles", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a responsible by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", Promise)
], ResponsibleController.prototype, "getResponsibleById", null);
__decorate([
    (0, common_1.Get)(':document'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a responsible by Document' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [document_dto_1.DocumentDto]),
    __metadata("design:returntype", Promise)
], ResponsibleController.prototype, "getResponsibleByDocument", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a School by systemId' }),
    (0, swagger_1.ApiBody)({ required: true, type: responsible_dto_1.ResponsibleDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: responsible_dto_1.ResponsibleDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto, responsible_dto_1.ResponsibleDto]),
    __metadata("design:returntype", Promise)
], ResponsibleController.prototype, "UpdateSchool", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a School' }),
    (0, swagger_1.ApiBody)({ required: true, type: responsible_dto_1.ResponsibleDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: responsible_dto_1.ResponsibleDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [responsible_dto_1.ResponsibleDto]),
    __metadata("design:returntype", Promise)
], ResponsibleController.prototype, "createSchool", null);
ResponsibleController = __decorate([
    (0, swagger_1.ApiTags)('Responsible'),
    (0, common_1.Controller)('responsible'),
    __metadata("design:paramtypes", [responsible_service_1.ResponsibleService])
], ResponsibleController);
exports.ResponsibleController = ResponsibleController;
//# sourceMappingURL=responsible.controller.js.map