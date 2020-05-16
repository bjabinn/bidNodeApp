import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { Observable } from 'rxjs';
import { MemberInfo } from '@bid/bid-api-service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User Management')
@Controller('organization/users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @ApiOperation({
        summary:
            'By passing a minimum of three characters in the criteria text, you can get all members for organization directory that matches this parameter'
    })
    @Get(':criteria')
    searchUser(@Param('criteria') criteria: string): Observable<MemberInfo[]> {
        return this.userService.searchUser(criteria);
    }
}
