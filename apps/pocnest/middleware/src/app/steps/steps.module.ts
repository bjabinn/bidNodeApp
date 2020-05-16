import { Module, HttpModule } from '@nestjs/common';
import { StepsService } from './service/steps.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5
        })
    ],
    controllers: [],
    providers: [StepsService]
})
export class StepsModule {}
