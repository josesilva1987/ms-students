import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOrUpdateResponseDto } from "src/api/common/dto/createUpdateResponse.dto";
import { IdDto } from "src/api/common/dto/id.dto";
import { SystemIdDto, SystemIdSchoolIdDto } from "src/api/common/dto/systemId.dto";
import { UnitEntity } from "src/database/entities/unit.entity";
import { UnitDto } from "./dto/unit.dto";
import { UnitService } from "./unit.service";

@ApiTags('Units')
@Controller('unit')
export class UnitController{
    constructor(private unitService: UnitService) {}

    @Get()
    @ApiOperation({ summary: 'Get all Units' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getUnits(): Promise<UnitEntity[]>{
        return this.unitService.getUnits();
    }

   /*@Get(':id')
    @ApiOperation({ summary: 'Get Units by Id' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getUnitById(@Param() params: IdDto): Promise<UnitEntity> {
        return this.unitService.getUnitById(params.id);
    }*/

    @Get(':schoolId,:systemId')
    @ApiOperation({ summary: 'Get units by systemId and schoolId' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getUnitBySchoolIdAndSystemId(@Param() params: SystemIdSchoolIdDto): Promise<UnitEntity[]> {
        return this.unitService.getUnitBySchoolIdAndSystemId(params.systemId, params.schoolId);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update unit by id' })
    @ApiBody({ required: true, type: UnitDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: UnitDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async UpdateUnitById(@Param() params: IdDto, @Body() payload: UnitEntity): Promise<CreateOrUpdateResponseDto>{
        return this.unitService.updateUnitById(params.id, payload);
    }

    @Put(':systemId')
    @ApiOperation({ summary: 'Update unit by systemId' })
    @ApiBody({ required: true, type: UnitDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: UnitDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async UpdateUnitBySystemId(@Param() params: SystemIdDto, @Body() payload: UnitEntity): Promise<CreateOrUpdateResponseDto>{
        return this.unitService.updateUnitBySystemid(params.systemId, payload);
    }

    @Post()
    @ApiOperation({ summary: 'Create a Unit' })
    @ApiBody({ required: true, type: UnitDto })
    @ApiResponse({ status: 200, description: 'Task executed with success' ,type: UnitDto })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async createUnit(@Body() payload: UnitEntity): Promise<CreateOrUpdateResponseDto>{
        return this.unitService.createUnit(payload);
    }
}