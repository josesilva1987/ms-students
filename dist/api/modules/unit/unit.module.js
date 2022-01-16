"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unit_entity_1 = require("../../../database/entities/unit.entity");
const unit_controller_1 = require("./unit.controller");
const unit_service_1 = require("./unit.service");
let UnitModule = class UnitModule {
};
UnitModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([unit_entity_1.UnitEntity])],
        providers: [unit_service_1.UnitService],
        exports: [unit_service_1.UnitService],
        controllers: [unit_controller_1.UnitController],
    })
], UnitModule);
exports.UnitModule = UnitModule;
//# sourceMappingURL=unit.module.js.map