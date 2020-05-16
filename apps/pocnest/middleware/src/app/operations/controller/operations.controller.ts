import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StepsService } from '../../steps/service/steps.service';
import { Step } from '../../dataModel/models/step.model';
import { DistributionListMember } from '../../dataModel/models/distribution-list-member.model';
import { Observable } from 'rxjs';
import { MeetingsService } from '../../meetings/service/meetings.service';

@ApiTags('Operations')
@Controller('operations')
export class OperationsController {
    constructor(
        private stepService: StepsService,
        private meetingService: MeetingsService
    ) {}

    //STEPS
    @ApiOperation({
        summary: 'Return the detailed information of a specific step'
    })
    @Get(':operationNumber/steps/:id')
    getStep(
        @Param('operationNumber') operationNumber: string,
        @Param('id') id: string
    ): Observable<Step> {
        return this.stepService.getStepInfo(operationNumber, id);
    }

    @ApiOperation({
        summary:
            'Changes the status of the current step to completed and changes the status of the next step to in progress'
    })
    @Post(':operationNumber/steps/:id/move-next')
    nextMove(
        @Param('operationNumber') operationNumber: string,
        @Param('id') id: string,
        @Body() step: Step
    ): Observable<string> {
        return this.stepService.moveNextStep(operationNumber, id, step);
    }

    @ApiOperation({
        summary:
            'Returns to a specific step depending on the defined process template and associated business rules. It changes current step status to returned and the previous step status to in progress'
    })
    @Post(':operationNumber/steps/:id/return')
    return(
        @Param('operationNumber') operationNumber: string,
        @Param('id') id: string,
        @Body() step: Step
    ): Observable<string> {
        return this.stepService.returnStep(operationNumber, id, step);
    }

    //MEETINGS
    @ApiOperation({ summary: 'Add members to the provided distribution list' })
    @Post(':operationNumber/meetings/:id/distribution-list-members')
    addMember(
        @Param('operationNumber') operationNumber: string,
        @Param('id') memberId: string,
        memberCollection: DistributionListMember[]
    ): Observable<string> {
        return this.meetingService.addDLMember(
            operationNumber,
            memberId,
            memberCollection
        );
    }

    @ApiOperation({ summary: 'Deletes a member in the distribution list' })
    @Delete(':operationNumber/meetings/:id/distribution-list-members/:memberId')
    deleteMember(
        @Param('operationNumber') operationNumber: string,
        @Param('id') id: string,
        @Param('memberId') memberId: string
    ): Observable<string> {
        return this.meetingService.deleteMember(operationNumber, id, memberId);
    }
}
