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
exports.TransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TransactionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'customerId', example: 1 }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'subscriptionId', example: 1 }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "subscriptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'billingId', example: 1 }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "billingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'statusId', example: 1 }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "statusId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'gatewayId', example: 1 }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "gatewayId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'amount', example: 19.99 }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'gatewayTransaction' }),
    __metadata("design:type", String)
], TransactionDto.prototype, "gatewayTransaction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'paymentDate', example: new Date }),
    __metadata("design:type", Date)
], TransactionDto.prototype, "paymentDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'paymentMethod', example: "creditcard" }),
    __metadata("design:type", String)
], TransactionDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'billetUrl', nullable: true }),
    __metadata("design:type", String)
], TransactionDto.prototype, "billetUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'refundDate', example: new Date }),
    __metadata("design:type", Date)
], TransactionDto.prototype, "refundDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'createdAt', example: new Date }),
    __metadata("design:type", Date)
], TransactionDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'updatedAt', example: new Date }),
    __metadata("design:type", Date)
], TransactionDto.prototype, "updatedAt", void 0);
exports.TransactionDto = TransactionDto;
//# sourceMappingURL=transaction.dto.js.map