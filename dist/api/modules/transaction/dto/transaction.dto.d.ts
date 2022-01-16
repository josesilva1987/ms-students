export declare class TransactionDto {
    customerId: number;
    subscriptionId: number;
    billingId: number;
    statusId: number;
    gatewayId: number;
    amount: number;
    gatewayTransaction: string;
    paymentDate: Date;
    paymentMethod: string;
    billetUrl: string;
    refundDate?: Date;
    createdAt: Date;
    updatedAt?: Date;
}
