import { Role } from './Role';

export class User {
    id!: number;
    user_type!: string;
    username!: string;
    email!: string;
    password!: string;
    adress!: string;
    phone!: number;
    avataPath!: string;
    niu!: string;
    roles!: Role[];

    constructor(){ /* TODO document why this constructor is empty */ }
} 
