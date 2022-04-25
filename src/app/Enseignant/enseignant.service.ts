import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private httpClient:HttpClient) { }

  getEnseignantList():Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(`${this.baseURL}`);
  }
  getEnseignantById(id:number):Observable<Enseignant>{
    return this.httpClient.get<Enseignant>(`${this.baseURL}/${id}`);
  }

  searchEnseignantsByStatut(statut:string):Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(`${this.baseURLStatut}/${statut}`);
  }

  searchEnseignantsByGroupeId(id:number):Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(`${this.baseURLGroupe}/${id}`);
  }
  createEnseignant(enseignant:Enseignant):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,enseignant);
  }

  createEnseignantWhithGroupe(enseignant:Enseignant,groupe:string):Observable<Object>{
    return this.httpClient.post(`${this.baseURLCreateEnseignantWhithGroupe}/${groupe}`,enseignant);
  }
  updateEnseignant(id:number,enseignant:Enseignant):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,enseignant);
  }
  deleteEnseignant(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  addEnseignantToGroupe(mail:string,groupe:string):Observable<Object>{
    return this.httpClient.post(`${this.baseURLAddEnseignantToGroupe}/${mail}/${groupe}`,httOptions);
  }
  deleteEnseignantToGroupe(mail:string,groupe:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseURLDeleteEnseignantToGroupe}/${mail}/${groupe}`,httOptions);
  }
 
}
