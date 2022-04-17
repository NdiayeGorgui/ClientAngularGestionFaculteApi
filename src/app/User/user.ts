import { Role } from "../Role/role";

export class User {
    userId!:string;
    userName!:string;
    password!:string;
    roles!:Role[];
    
}
