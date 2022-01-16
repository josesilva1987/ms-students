import { GatewayEntity } from "src/database/entities/gateway.entity";
import { GatewayRepository } from "src/database/repository/gateway.repository";
export declare class GatewayService {
    private gatewayrepository;
    constructor(gatewayrepository: GatewayRepository);
    getGateway(): Promise<GatewayEntity[]>;
}
