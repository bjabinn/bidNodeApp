import { Module } from '@nestjs/common';

import { StepsModule } from './steps/steps.module';
import { BidApiServiceModule } from '@bid/bid-api-service';
import { environment } from '../environments/environment';
import { MeetingsModule } from './meetings/meetings.module';
import { OperationsController } from './operations/controller/operations.controller';
import { OperationsModule } from './operations/operations.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        StepsModule,
        MeetingsModule,
        OperationsModule,
        BidApiServiceModule.forRoot(environment).ngModule,
        UsersModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
