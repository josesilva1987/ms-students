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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEntity = void 0;
const typeorm_1 = require("typeorm");
let UnitEntity = class UnitEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UnitEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'schoollId', comment: 'Código da Escola', nullable: true }),
    __metadata("design:type", Number)
], UnitEntity.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'systemId', comment: 'Id do Colégio no sistema Origem', nullable: true }),
    __metadata("design:type", Number)
], UnitEntity.prototype, "systemId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', comment: 'Nome do Aluno', length: 100 }),
    __metadata("design:type", String)
], UnitEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', comment: 'Data de criação do Registro' }),
    __metadata("design:type", Date)
], UnitEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true, comment: 'Data da ultima alteração do Registro' }),
    __metadata("design:type", Date)
], UnitEntity.prototype, "updatedAt", void 0);
UnitEntity = __decorate([
    (0, typeorm_1.Entity)('unit')
], UnitEntity);
exports.UnitEntity = UnitEntity;
//# sourceMappingURL=unit.entity.js.map