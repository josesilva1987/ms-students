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
exports.RegistrationEntity = void 0;
const typeorm_1 = require("typeorm");
let RegistrationEntity = class RegistrationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RegistrationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'schoolId', comment: 'Código da Escola' }),
    __metadata("design:type", Number)
], RegistrationEntity.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'unitId', comment: 'Código da Unidade' }),
    __metadata("design:type", Number)
], RegistrationEntity.prototype, "unitId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'studentId', comment: 'Código do Aluno' }),
    __metadata("design:type", Number)
], RegistrationEntity.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'year', comment: 'Ano Letivo' }),
    __metadata("design:type", Number)
], RegistrationEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', comment: 'Status da Matrícula do Aluno' }),
    __metadata("design:type", String)
], RegistrationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hash', comment: 'Hash da matricula' }),
    __metadata("design:type", String)
], RegistrationEntity.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', comment: 'Data de criação do Registro' }),
    __metadata("design:type", Date)
], RegistrationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true, comment: 'Data da ultima alteração do Registro' }),
    __metadata("design:type", Date)
], RegistrationEntity.prototype, "updatedAt", void 0);
RegistrationEntity = __decorate([
    (0, typeorm_1.Entity)('registration')
], RegistrationEntity);
exports.RegistrationEntity = RegistrationEntity;
//# sourceMappingURL=registration.entity.js.map