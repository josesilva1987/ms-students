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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gateway_entity_1 = require("src/database/entities/gateway.entity");
const gateway_repository_1 = require("src/database/repository/gateway.repository");
let GatewayService = class GatewayService {
    constructor(gatewayrepository) {
        this.gatewayrepository = gatewayrepository;
    }
    async getGateway() {
        return this.gatewayrepository.find();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GatewayService.prototype, "getGateway", null);
GatewayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gateway_entity_1.GatewayEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof gateway_repository_1.GatewayRepository !== "undefined" && gateway_repository_1.GatewayRepository) === "function" ? _a : Object])
], GatewayService);
exports.GatewayService = GatewayService;
//# sourceMappingURL=gateway.service.js.map