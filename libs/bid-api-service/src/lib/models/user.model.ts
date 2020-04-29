import { Role } from '@bid/bid-api-service';

export class User {
    uuid: string;
    name: string;
    role?: Role;
}
