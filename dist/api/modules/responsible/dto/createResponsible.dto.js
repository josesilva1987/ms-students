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
exports.CreateResponsibleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateResponsibleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'document', example: "2345678900" }),
    __metadata("design:type", String)
], CreateResponsibleDto.prototype, "document", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'name', example: "Responsible X" }),
    __metadata("design:type", String)
], CreateResponsibleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'email', example: "teste@teste.com.br" }),
    __metadata("design:type", String)
], CreateResponsibleDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'kinship', example: "Financial" }),
    __metadata("design:type", String)
], CreateResponsibleDto.prototype, "kinship", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'createdAt', example: new Date }),
    __metadata("design:type", Date)
], CreateResponsibleDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'updatedAt', example: new Date, required: false }),
    __metadata("design:type", Date)
], CreateResponsibleDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'studentId', example: "123456" }),
    __metadata("design:type", Number)
], CreateResponsibleDto.prototype, "studentId", void 0);
exports.CreateResponsibleDto = CreateResponsibleDto;
//# sourceMappingURL=createResponsible.dto.js.map