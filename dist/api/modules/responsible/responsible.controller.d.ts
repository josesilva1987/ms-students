import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { DocumentDto } from "src/api/common/dto/document.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { ResponsibleEntity } from "src/database/entities/responsible.entity";
import { ResponsibleDto } from "./dto/responsible.dto";
import { ResponsibleService } from "./responsible.service";
export declare class ResponsibleController {
    private responsibleService;
    constructor(responsibleService: ResponsibleService);
    getResponsibles(): Promise<ResponsibleEntity[]>;
    getResponsibleById(params: IdDto): Promise<ResponsibleEntity>;
    getResponsibleByDocument(params: DocumentDto): Promise<ResponsibleEntity>;
    UpdateSchool(params: IdDto, payload: ResponsibleDto): Promise<CreateOrUpdateResponseDto>;
    createSchool(payload: ResponsibleDto): Promise<ResponsibleDto | CreateOrUpdateResponseDto>;
}
