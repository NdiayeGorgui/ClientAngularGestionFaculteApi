import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Login/auth.service';
import { Groupe } from './groupe';
const httOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  
 private baseURL="http://localhost:8090/api/Groupes"
 private baseURLFormation="http://localhost:8090/api/Groupes/Formations/Nom"
  private baseURLEnseignant="http://localhost:8090/api/Groupes/Enseignants"

 
  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getGroupeList():Observable<Groupe[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Groupe[]>(`${this.baseURL}`,{headers:httpHeaders});
  }
  getGroupeById(id:number):Observable<Groupe>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Groupe>(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }

  searchGroupeByFormationName(name:string):Observable<Groupe[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Groupe[]>(`${this.baseURLFormation}/${name}`,{headers:httpHeaders});
  }
  searchGroupeByEnseignantId(id:number):Observable<Groupe[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Groupe[]>(`${this.baseURLEnseignant}/${id}`,{headers:httpHeaders});
  }
 
  createGroupe(groupe:Groupe):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURL}`,groupe,{headers:httpHeaders});
  }
  updateGroupe(id:number,groupe:Groupe):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURL}/${id}`,groupe,{headers:httpHeaders});
  }
  deleteGroupe(id:number):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }
}
