import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitRepository } from "src/database/repository/units.repository";
export declare class UnitService {
    private unitRespository;
    constructor(unitRespository: UnitRepository);
    getUnits(): Promise<UnitEntity[]>;
    getUnitById(id: number): Promise<UnitEntity>;
    getUnitBySchoolIdAndSystemId(systemId: number, schoolId: number): Promise<UnitEntity[]>;
    createUnit(payload: UnitEntity): Promise<any>;
    updateUnitById(id: number, payload: UnitEntity): Promise<CreateOrUpdateResponseDto>;
    updateUnitBySystemid(id: number, payload: UnitEntity): Promise<CreateOrUpdateResponseDto>;
}
