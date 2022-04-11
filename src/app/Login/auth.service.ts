import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../Role/role';
import { User } from '../User/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL="http://localhost:8090/api/Users"
  constructor(private httpClient:HttpClient, private router:Router) { }

  /* users:User[]=[{'username':"admin",'password':"admin",'roles':['ADMIN']},
             {"username":"user","password":"user","roles":['USER']}
]; */
public loggedUser!:string;
public isloggedIn!:boolean;
public roles!:Role[];

signIn(user:User){

  this.loggedUser=user.userName;
  this.isloggedIn=true;
  this.roles=user.roles;
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  localStorage.setItem('loggedUser',String(this.loggedUser));
}
/* signIn(user:User):Boolean{
let validUser:Boolean=false;
this.users.forEach((curUser) =>{
  if(user.username===curUser.username && user.password==curUser.password){
    validUser=true;
    this.loggedUser=curUser.username;
    this.isloggedIn=true;
    this.roles=curUser.roles;
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    localStorage.setItem('loggedUser',String(this.loggedUser));

  }
});
return validUser;
} */
isAdmin():Boolean{
  let admin:Boolean=false;
  
    if(!this.roles)  // if(this.roles==undefined)
      return false;
    
    this.roles.forEach((curRole)=>{
        if(curRole.roleName == 'ADMIN'){
          admin=true;
        }
      });
    
  return admin;
}

isSuperAdmin():Boolean{
  let superAdmin:Boolean=false;
  
    if(!this.roles)  // if(this.roles==undefined)
      return false;
    
    this.roles.forEach((curRole)=>{
        if(curRole.roleName == 'superadmin'){
          superAdmin=true;
        }
      });
    
  return superAdmin;
}
/* isAdmin():Boolean{
  let validUser:Boolean=false;
  
    if(!this.roles){
      return false;
    }
  return (this.roles.indexOf('ADMIN')>-1); //cette chaine admin appartient au tableau roles. elle retourn - 1 si ca ne se trouve pas dans le tableau
  } */

  logout(){
    this.isloggedIn=false;
    this.loggedUser!=undefined;
    this.roles!=undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login :string){
    this.loggedUser=login;
    this.isloggedIn=true;
    this.getUserRoles(login);


  }

  getUserRoles(username:string){
    this.getUserByUserName(username).subscribe((user:User)=>{
     
        this.roles=user.roles;
      
    });

  }

  /* getUserRoles(username:string){
    this.users.forEach((curUser)=>{
      if(curUser.username==username){
        this.roles=curUser.roles;
      }
    });

  } */

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  getUserById(id:string):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  getUserByUserName(userName:string):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${userName}`);
  }
 
  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }
  updateUser(id:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,user);
  }
  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
