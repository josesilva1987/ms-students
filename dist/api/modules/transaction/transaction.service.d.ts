import { CreateOrUpdateResponseDto } from 'src/api/common/dto/createUpdateResponse.dto';
import { TransactionEntity } from 'src/database/entities/transaction.entity';
import { TransactionRepository } from 'src/database/repository/transaction.repository';
import { TransactionDto } from './dto/transaction.dto';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: TransactionRepository);
    getTransactions(): Promise<TransactionEntity[]>;
    createTransaction(payload: TransactionDto | TransactionEntity): Promise<any>;
    updateTransaction(id: number, payload: Partial<TransactionEntity>): Promise<CreateOrUpdateResponseDto>;
}
