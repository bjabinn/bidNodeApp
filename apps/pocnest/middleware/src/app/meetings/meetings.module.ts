import { Module, HttpModule } from '@nestjs/common';
import { MeetingsService } from './service/meetings.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5
        })
    ],
    controllers: [],
    providers: [MeetingsService]
})
export class MeetingsModule {}
