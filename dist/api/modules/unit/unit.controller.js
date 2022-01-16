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
exports.UnitController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const id_dto_1 = require("../../common/dto/id.dto");
const systemId_dto_1 = require("../../common/dto/systemId.dto");
const unit_dto_1 = require("./dto/unit.dto");
const unit_service_1 = require("./unit.service");
let UnitController = class UnitController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async getUnits() {
        return this.unitService.getUnits();
    }
    async getUnitById(params) {
        return this.unitService.getUnitById(params.id);
    }
    async getUnitBySystemId(params) {
        return this.unitService.getUnitBySystemId(params.systemId);
    }
    async UpdateUnitById(params, payload) {
        return this.unitService.updateUnitById(params.id, payload);
    }
    async UpdateUnitBySystemId(params, payload) {
        return this.unitService.updateUnitBySystemid(params.systemId, payload);
    }
    async createUnit(payload) {
        return this.unitService.createUnit(payload);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Units' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnits", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Units by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnitById", null);
__decorate([
    (0, common_1.Get)(':systemId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get units  by systemId' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [systemId_dto_1.SystemIdDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getUnitBySystemId", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update unit by id' }),
    (0, swagger_1.ApiBody)({ required: true, type: unit_dto_1.UnitDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: unit_dto_1.UnitDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.IdDto, unit_dto_1.UnitDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "UpdateUnitById", null);
__decorate([
    (0, common_1.Put)(':systemId'),
    (0, swagger_1.ApiOperation)({ summary: 'Update unit by systemId' }),
    (0, swagger_1.ApiBody)({ required: true, type: unit_dto_1.UnitDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: unit_dto_1.UnitDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [systemId_dto_1.SystemIdDto, unit_dto_1.UnitDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "UpdateUnitBySystemId", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a Unit' }),
    (0, swagger_1.ApiBody)({ required: true, type: unit_dto_1.UnitDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success', type: unit_dto_1.UnitDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_dto_1.UnitDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "createUnit", null);
UnitController = __decorate([
    (0, swagger_1.ApiTags)('Units'),
    (0, common_1.Controller)('unit'),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitController);
exports.UnitController = UnitController;
//# sourceMappingURL=unit.controller.js.map