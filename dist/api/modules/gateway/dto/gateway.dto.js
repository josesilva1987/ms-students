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
exports.GatewayDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GatewayDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'name', example: "Nome do Gateway" }),
    __metadata("design:type", String)
], GatewayDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'tokenKey', example: "00000" }),
    __metadata("design:type", String)
], GatewayDto.prototype, "tokenKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'tokenKeySecudanry', example: "00000" }),
    __metadata("design:type", String)
], GatewayDto.prototype, "tokenKeySecudanry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'contact', example: "00000" }),
    __metadata("design:type", String)
], GatewayDto.prototype, "contact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'phone', example: "(11)97172-0259" }),
    __metadata("design:type", String)
], GatewayDto.prototype, "phone", void 0);
exports.GatewayDto = GatewayDto;
//# sourceMappingURL=gateway.dto.js.map