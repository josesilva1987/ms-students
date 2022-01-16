import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitRepository } from "src/database/repository/units.repository";
import { UnitDto } from "./dto/unit.dto";
export declare class UnitService {
    private unitRespository;
    constructor(unitRespository: UnitRepository);
    getUnits(): Promise<UnitEntity[]>;
    getUnitById(id: number): Promise<UnitEntity>;
    getUnitBySystemId(systemId: number): Promise<UnitEntity[]>;
    createUnit(payload: UnitDto | UnitEntity): Promise<any>;
    updateUnitById(id: number, payload: UnitDto): Promise<CreateOrUpdateResponseDto>;
    updateUnitBySystemid(id: number, payload: UnitDto): Promise<CreateOrUpdateResponseDto>;
}
