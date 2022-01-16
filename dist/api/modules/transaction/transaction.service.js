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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("src/database/entities/transaction.entity");
const transaction_repository_1 = require("src/database/repository/transaction.repository");
let TransactionService = class TransactionService {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async getTransactions() {
        try {
            return this.transactionRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createTransaction(payload) {
        const result = await this.transactionRepository.insert(payload);
        if (result.raw.affectedRows === 0) {
            throw new common_1.HttpException('Error inserting transaction', common_1.HttpStatus.BAD_REQUEST);
        }
        if (Array.isArray(payload)) {
            const mapped = result.raw.map((item) => {
                return { id: item.id };
            });
            return mapped;
        }
        return { id: result.raw.insertId };
    }
    async updateTransaction(id, payload) {
        const result = await this.transactionRepository.update(id, payload);
        return { id, rowAffected: result.affected };
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.TransactionEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof transaction_repository_1.TransactionRepository !== "undefined" && transaction_repository_1.TransactionRepository) === "function" ? _a : Object])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map