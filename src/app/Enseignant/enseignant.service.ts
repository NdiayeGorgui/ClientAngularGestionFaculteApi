import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Login/auth.service';
import { Enseignant } from './enseignant';
const httOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  value!:string;
  private baseURLCreateEnseignantWhithGroupe="http://localhost:8090/api/Enseignants/saveEnseignantWihtGroupe";
  private baseURL="http://localhost:8090/api/Enseignants";
  private baseURLAddEnseignantToGroupe="http://localhost:8090/api/Enseignants/addEnseignantToGroupe";
  private baseURLDeleteEnseignantToGroupe="http://localhost:8090/api/Enseignants/deleteEnseignantToGroupe";
  private baseURLStatut="http://localhost:8090/api/Enseignants/Statut";
  private baseURLGroupe="http://localhost:8090/api/Enseignants/Groupe";
  constructor(private httpClient:HttpClient,private authService:AuthService) { }
    
  getEnseignantList():Observable<Enseignant[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Enseignant[]>(`${this.baseURL}`,{headers:httpHeaders});
  }
  getEnseignantById(id:number):Observable<Enseignant>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    
    return this.httpClient.get<Enseignant>(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }

  searchEnseignantsByStatut(statut:string):Observable<Enseignant[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Enseignant[]>(`${this.baseURLStatut}/${statut}`,{headers:httpHeaders});
  }

  searchEnseignantsByGroupeId(id:number):Observable<Enseignant[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<Enseignant[]>(`${this.baseURLGroupe}/${id}`,{headers:httpHeaders});
  }
  createEnseignant(enseignant:Enseignant):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURL}`,enseignant,{headers:httpHeaders});
  }

  createEnseignantWhithGroupe(enseignant:Enseignant,groupe:string):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLCreateEnseignantWhithGroupe}/${groupe}`,enseignant,{headers:httpHeaders});
  }
  updateEnseignant(id:number,enseignant:Enseignant):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.put(`${this.baseURL}/${id}`,enseignant,{headers:httpHeaders});
  }
  deleteEnseignant(id:number):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers:httpHeaders});
  }

  addEnseignantToGroupe(mail:string,groupe:string):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.post(`${this.baseURLAddEnseignantToGroupe}/${mail}/${groupe}`,httOptions,{headers:httpHeaders});
  }
  deleteEnseignantToGroupe(mail:string,groupe:string):Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.delete(`${this.baseURLDeleteEnseignantToGroupe}/${mail}/${groupe}`,{headers:httpHeaders});
  }
 
}
