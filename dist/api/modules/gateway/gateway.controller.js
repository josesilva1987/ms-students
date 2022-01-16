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
exports.GatewayController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const gateway_service_1 = require("./gateway.service");
let GatewayController = class GatewayController {
    constructor(gatewayService) {
        this.gatewayService = gatewayService;
    }
    async getTransactions() {
        return this.gatewayService.getGateway();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Gateway' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task executed with success' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GatewayController.prototype, "getTransactions", null);
GatewayController = __decorate([
    (0, common_1.Controller)('gateway'),
    (0, swagger_1.ApiTags)('Gateway'),
    __metadata("design:paramtypes", [gateway_service_1.GatewayService])
], GatewayController);
exports.GatewayController = GatewayController;
//# sourceMappingURL=gateway.controller.js.map