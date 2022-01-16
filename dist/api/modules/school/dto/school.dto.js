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
exports.SchoolDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SchoolDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'systemId', example: 1, required: false }),
    __metadata("design:type", Number)
], SchoolDto.prototype, "systemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'name', example: "Colégio X" }),
    __metadata("design:type", String)
], SchoolDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'createdAt', example: new Date }),
    __metadata("design:type", Date)
], SchoolDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'updatedAt', example: new Date, required: false }),
    __metadata("design:type", Date)
], SchoolDto.prototype, "updatedAt", void 0);
exports.SchoolDto = SchoolDto;
//# sourceMappingURL=school.dto.js.map