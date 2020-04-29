import { Module, HttpModule } from '@nestjs/common';
import { OperationsController } from './controller/operations.controller';
import { StepsService } from '../steps/service/steps.service';
import { MeetingsService } from '../meetings/service/meetings.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5
        })
    ],
    controllers: [OperationsController],
    providers: [StepsService, MeetingsService]
})
export class OperationsModule {}
