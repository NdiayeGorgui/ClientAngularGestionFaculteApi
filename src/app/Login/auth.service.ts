import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Role } from '../Role/role';


import { User } from '../User/user';
const httOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiURL="http://localhost:8090/api"
  private baseURL="http://localhost:8090/api/Users"
  private baseURLUserbyId="http://localhost:8090/api/Users/User"
  private baseURLRole="http://localhost:8090/api/Roles"
  private baseURLRoleById="http://localhost:8090/api/Roles/Role"
  private baseURLAddRoleToUser="http://localhost:8090/api/Users/addRoleToUser"
  private baseURLDeleteRoleToUser="http://localhost:8090/api/Users/deleteRoleToUser"
  private baseURLaddUserWithRole="http://localhost:8090/api/Users/addUserWithRole"
  private baseURLRolesListByUserName="http://localhost:8090/api/Users/Role/UserName"
  private baseURLSearchUserbyRolesId="http://localhost:8090/api/Users/Role"
  private baseURLSearcRolebyUsersId="http://localhost:8090/api/Roles/User"
 

  constructor(private httpClient:HttpClient, private router:Router) { }

public loggedUser!:string;
public isloggedIn!:boolean;
public roles!:String[];
token!:string;
private helper = new JwtHelperService();


login(user : User){
 
  return this.httpClient.post<User>(this.baseApiURL+'/login', user , {observe:'response'});
}

saveToken(jwt:string){
  localStorage.setItem('jwt',jwt);
  this.token = jwt;
  this.isloggedIn = true;
  this.decodeJWT();
  }

  decodeJWT(){ 
    if (this.token == undefined)
    return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }


   loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  } 
  getToken():string {
    return this.token;
  }


isAdmin():Boolean{
  if (!this.roles)
  return false;
  return this.roles.indexOf('ADMIN') >=0;
}

isResponsable():Boolean{
  if (!this.roles)
  return false;
  return this.roles.indexOf('RESPONSABLE') >=0;
}

  logout(){
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token= undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isTokenExpired(): Boolean{
    return this.helper.isTokenExpired(this.token); 
  }

  setLoggedUserFromLocalStorage(login :string){
    this.loggedUser=login;
    this.isloggedIn=true;
   
  }

  getUserList():Observable<User[]>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<User[]>(`${this.baseURL}`,{headers:httpHeaders});
  }
  getRolesList():Observable<Role[]>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Role[]>(`${this.baseURLRole}`,{headers:httpHeaders});
  }
  getUserById(id:number):Observable<User>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<User>(`${this.baseURLUserbyId}/${id}`,{headers:httpHeaders});
  }
  getRoleById(id:number):Observable<Role>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Role>(`${this.baseURLRoleById}/${id}`,{headers:httpHeaders});
  }
  getUserByUserName(userName:string):Observable<User>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<User>(`${this.baseURL}/${userName}`,{headers:httpHeaders});
  }

  getRoleByRoleName(roleName:string):Observable<Role>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Role>(`${this.baseURLRole}/${roleName}`,{headers:httpHeaders});
  }
 
  createUser(user:User):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURL}`,user,{headers:httpHeaders});
  }

  createRole(role:Role):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLRole}`,role,{headers:httpHeaders});
  }
  updateUser(id:number,user:User):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURL}/${id}`,user,{headers:httpHeaders});
  }

  updateRole(id:number,role:Role):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURLRole}/${id}`,role,{headers:httpHeaders});
  }
 
  deleteUser(id:number):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }
  deleteRole(id:number):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURLRole}/${id}`,{headers:httpHeaders});
  }

  addRoleToUser(userName:string,roleName:string):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLAddRoleToUser}/${userName}/${roleName}`,httOptions,{headers:httpHeaders});
  }
 
  deleteRoleToUser(userName:string,roleName:string):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURLDeleteRoleToUser}/${userName}/${roleName}`,{headers:httpHeaders});
  }

  saveUserWihtRole(user:User,roleName:string):Observable<Object>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLaddUserWithRole}/${roleName}`,user,{headers:httpHeaders});
  }
 
  searchUserbyRolesId(id:number):Observable<User[]>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<User[]>(`${this.baseURLSearchUserbyRolesId}/${id}`,{headers:httpHeaders});
  }
  searcRolebyUsersId(id:number):Observable<Role[]>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Role[]>(`${this.baseURLSearcRolebyUsersId}/${id}`,{headers:httpHeaders});
  }
  searcRolesbyUserName(userName:string):Observable<Role[]>{
    let jwt = this.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Role[]>(`${this.baseURLRolesListByUserName}/${userName}`,{headers:httpHeaders});
  }
}
