import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { SystemIdDto, SystemIdSchoolIdDto } from "src/api/common/dto/systemId.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitService } from "./unit.service";
export declare class UnitController {
    private unitService;
    constructor(unitService: UnitService);
    getUnits(): Promise<UnitEntity[]>;
    getUnitBySchoolIdAndSystemId(params: SystemIdSchoolIdDto): Promise<UnitEntity[]>;
    UpdateUnitById(params: IdDto, payload: UnitEntity): Promise<CreateOrUpdateResponseDto>;
    UpdateUnitBySystemId(params: SystemIdDto, payload: UnitEntity): Promise<CreateOrUpdateResponseDto>;
    createUnit(payload: UnitEntity): Promise<CreateOrUpdateResponseDto>;
}
