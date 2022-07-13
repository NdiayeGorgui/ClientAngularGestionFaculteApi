import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Login/auth.service';
import { TypeCours } from './type-cours';

@Injectable({
  providedIn: 'root'
})
export class TypeCoursService {

  private baseURL="http://localhost:8090/api/TypeCours"

  

  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getTypeCoursList():Observable<TypeCours[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<TypeCours[]>(`${this.baseURL}`,{headers:httpHeaders});
  }
  getTypeCoursById(id:number):Observable<TypeCours>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<TypeCours>(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }

 
  createTypeCours(typeCours:TypeCours):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURL}`,typeCours,{headers:httpHeaders});
  }
  updateTypeCours(id:number,typeCours:TypeCours):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURL}/${id}`,typeCours,{headers:httpHeaders});
  }
  deleteTypeCours(id:number):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }
}
