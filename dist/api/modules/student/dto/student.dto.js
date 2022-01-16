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
exports.StudentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StudentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'RA', example: '123456' }),
    __metadata("design:type", String)
], StudentDto.prototype, "RA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'name', example: 'Aluno X' }),
    __metadata("design:type", String)
], StudentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'email', example: 'exemplo@exemplo.com.br', required: false }),
    __metadata("design:type", String)
], StudentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'createdAt', example: new Date }),
    __metadata("design:type", Date)
], StudentDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'updatedAt', example: new Date, required: false }),
    __metadata("design:type", Date)
], StudentDto.prototype, "updatedAt", void 0);
exports.StudentDto = StudentDto;
//# sourceMappingURL=student.dto.js.map