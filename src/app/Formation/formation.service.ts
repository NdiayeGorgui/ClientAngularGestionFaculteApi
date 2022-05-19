import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Login/auth.service';
import { Formation } from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseURL="http://localhost:8090/api/Formations"
  private baseURLCours="http://localhost:8090/api/Formations/Cours"

  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getFormationList():Observable<Formation[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Formation[]>(`${this.baseURL}`,{headers:httpHeaders});
  }
  getFormationById(id:number):Observable<Formation>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }

  searchFormationsByCoursId(name:string):Observable<Formation[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Formation[]>(`${this.baseURLCours}/${name}`,{headers:httpHeaders});
  }
  createFormation(formation:Formation):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURL}`,formation,{headers:httpHeaders});
  }
  updateFormation(id:number,formation:Formation):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURL}/${id}`,formation,{headers:httpHeaders});
  }
  deleteFormation(id:number):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }
}