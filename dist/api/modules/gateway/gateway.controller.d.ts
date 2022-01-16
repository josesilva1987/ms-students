import { GatewayEntity } from "src/database/entities/gateway.entity";
import { GatewayService } from "./gateway.service";
export declare class GatewayController {
    private gatewayService;
    constructor(gatewayService: GatewayService);
    getTransactions(): Promise<GatewayEntity[]>;
}
