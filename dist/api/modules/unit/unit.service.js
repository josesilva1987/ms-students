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
exports.UnitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unit_entity_1 = require("../../../database/entities/unit.entity");
const units_repository_1 = require("../../../database/repository/units.repository");
let UnitService = class UnitService {
    constructor(unitRespository) {
        this.unitRespository = unitRespository;
    }
    async getUnits() {
        try {
            return this.unitRespository.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getUnitById(id) {
        try {
            return this.unitRespository.findOne({
                where: {
                    id
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getUnitBySystemId(systemId) {
        try {
            return this.unitRespository.find({
                where: {
                    systemId
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createUnit(payload) {
        const result = await this.unitRespository.insert(payload);
        if (result.raw.affectedRows === 0) {
            throw new common_1.HttpException('Error inserting Unit', common_1.HttpStatus.BAD_REQUEST);
        }
        if (Array.isArray(payload)) {
            const mapped = result.raw.map((item) => {
                return { id: item.id };
            });
            return mapped;
        }
        return { id: result.raw.insertId };
    }
    async updateUnitById(id, payload) {
        const result = await this.unitRespository.update(id, payload);
        return { id, rowAffected: result.affected };
    }
    async updateUnitBySystemid(id, payload) {
        const result = await this.unitRespository.update(id, payload);
        return { id, rowAffected: result.affected };
    }
};
UnitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unit_entity_1.UnitEntity)),
    __metadata("design:paramtypes", [units_repository_1.UnitRepository])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=unit.service.js.map