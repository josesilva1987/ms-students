import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { SystemIdDto } from "src/api/common/dto/systemId.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitDto } from "./dto/unit.dto";
import { UnitService } from "./unit.service";
export declare class UnitController {
    private unitService;
    constructor(unitService: UnitService);
    getUnits(): Promise<UnitEntity[]>;
    getUnitById(params: IdDto): Promise<UnitEntity>;
    getUnitBySystemId(params: SystemIdDto): Promise<UnitEntity[]>;
    UpdateUnitById(params: IdDto, payload: UnitDto): Promise<CreateOrUpdateResponseDto>;
    UpdateUnitBySystemId(params: SystemIdDto, payload: UnitDto): Promise<CreateOrUpdateResponseDto>;
    createUnit(payload: UnitDto): Promise<UnitDto | CreateOrUpdateResponseDto>;
}
