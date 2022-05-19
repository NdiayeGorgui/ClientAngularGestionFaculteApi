import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Login/auth.service';
import { Cours } from './cours';
const httOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  
  private baseURL="http://localhost:8090/api/Cours";
  private baseURLCreateCoursWithFormation="http://localhost:8090/api/Cours/saveCoursWithFormation";
  private baseURLAddCoursToFormation="http://localhost:8090/api/Cours/addCoursToFormation";
  private baseURLDeleteCoursToFormation="http://localhost:8090/api/Cours/deleteCoursToFormation";
  private baseURLEnseignant="http://localhost:8090/api/Cours/Enseignants";
  private baseURLFormation="http://localhost:8090/api/Cours/FormationName";

  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getCoursList():Observable<Cours[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Cours[]>(`${this.baseURL}`,{headers:httpHeaders});
  }
  getCoursById(id:number):Observable<Cours>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Cours>(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }

  searchCoursByEnseignantId(id:number):Observable<Cours[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Cours[]>(`${this.baseURLEnseignant}/${id}`,{headers:httpHeaders});
  }
  searchCoursByFormationName(name:string):Observable<Cours[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Cours[]>(`${this.baseURLFormation}/${name}`,{headers:httpHeaders});
  }
  createCours(cours:Cours):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURL}`,cours,{headers:httpHeaders});
  }
  createCoursWithFormation(cours:Cours,formation:string):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLCreateCoursWithFormation}/${formation}`,cours,{headers:httpHeaders});
  }
  updateCours(id:number,cours:Cours):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURL}/${id}`,cours,{headers:httpHeaders});
  }
  deleteCours(id:number):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }
  addCoursToFormation(libelle:string,formation:string):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLAddCoursToFormation}/${libelle}/${formation}`,httOptions,{headers:httpHeaders});
  }

  deleteCoursToFormation(libelle:string,formation:string):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURLDeleteCoursToFormation}/${libelle}/${formation}`,{headers:httpHeaders});
  }
}
