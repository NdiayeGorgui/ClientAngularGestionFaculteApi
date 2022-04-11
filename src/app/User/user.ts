import { Role } from "../Role/role";

export class User {
    id!:string;
    userName!:string;
    password!:string;
    roles!:Role[];
    
}
