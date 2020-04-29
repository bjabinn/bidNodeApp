import { ApiProperty } from '@nestjs/swagger';
export class FaceToFaceMeeting {
    @ApiProperty()
    id: string;
    @ApiProperty()
    date: string;
    @ApiProperty()
    room: string;
}
