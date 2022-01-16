import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { DocumentDto } from "src/api/common/dto/document.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { ResponsibleEntity } from "src/database/entities/responsible.entity";
import { ResponsibleDto } from "./dto/responsible.dto";
import { ResponsibleService } from "./responsible.service";

@ApiTags('Responsible')
@Controller('responsible')
export class ResponsibleController{
    constructor(private responsibleService: ResponsibleService){}

    @Get()
    @ApiOperation({ summary: 'Get all responsible' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getResponsibles(): Promise<ResponsibleEntity[]>{
        return this.responsibleService.getResponsibles()
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a responsible by Id' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getResponsibleById(@Param() params: IdDto): Promise<ResponsibleEntity>{
        return this.responsibleService.getResponsibleById(params.id);
    }

    @Get(':document')
    @ApiOperation({ summary: 'Get a responsible by Document' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getResponsibleByDocument(@Param() params: DocumentDto): Promise<ResponsibleEntity>{
        return this.responsibleService.getResponsibleByDocument(params.document);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a School by systemId' })
    @ApiBody({ required: true, type: ResponsibleDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: ResponsibleDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async UpdateSchool(@Param() params: IdDto, @Body() payload: ResponsibleDto): Promise<CreateOrUpdateResponseDto>{
        return this.responsibleService.updateResponsible(params.id, payload);
    }

    @Post()
    @ApiOperation({ summary: 'Create a School' })
    @ApiBody({ required: true, type: ResponsibleDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: ResponsibleDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async createSchool(@Body() payload: ResponsibleDto): Promise<ResponsibleDto | CreateOrUpdateResponseDto>{
        return this.responsibleService.createResponsible(payload);
    }
}