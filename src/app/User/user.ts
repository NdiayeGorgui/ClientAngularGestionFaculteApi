import { Role } from "../Role/role";

export class User {
    userId!:number;
    userName!:string;
    password!:string;
    roles!:Role[];
    
}
