import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { TransactionEntity } from "src/database/entities/transaction.entity";
import { TransactionDto } from "./dto/transaction.dto";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    getTransactions(): Promise<TransactionEntity[]>;
    createTransaction(payload: TransactionDto): Promise<TransactionDto>;
    alterTransaction(params: IdDto, payload: TransactionDto): Promise<CreateOrUpdateResponseDto>;
}
