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
exports.ResponsibleEntity = void 0;
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
let ResponsibleEntity = class ResponsibleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ResponsibleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'document', comment: 'Documento do Responsável' }),
    __metadata("design:type", String)
], ResponsibleEntity.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', comment: 'Nome do Responsável' }),
    __metadata("design:type", String)
], ResponsibleEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', comment: 'Email do Aluno' }),
    __metadata("design:type", String)
], ResponsibleEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kinship', comment: 'Grau de Parentesco' }),
    __metadata("design:type", String)
], ResponsibleEntity.prototype, "kinship", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', comment: 'Data de criação do Registro' }),
    __metadata("design:type", Date)
], ResponsibleEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true, comment: 'Data da ultima alteração do Registro' }),
    __metadata("design:type", Date)
], ResponsibleEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.StudentEntity, student => student.RA),
    (0, typeorm_1.JoinColumn)({ name: 'RA' }),
    (0, typeorm_1.Column)({ name: 'RA', comment: 'RA do Aluno' }),
    __metadata("design:type", String)
], ResponsibleEntity.prototype, "RA", void 0);
ResponsibleEntity = __decorate([
    (0, typeorm_1.Entity)('responsible')
], ResponsibleEntity);
exports.ResponsibleEntity = ResponsibleEntity;
//# sourceMappingURL=responsible.entity.js.map