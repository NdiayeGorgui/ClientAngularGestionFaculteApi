import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from './enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseURL="http://localhost:8090/api/Enseignants"

  constructor(private httpClient:HttpClient) { }

  getEnseignantList():Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(`${this.baseURL}`);
  }
  getEnseignantById(id:number):Observable<Enseignant>{
    return this.httpClient.get<Enseignant>(`${this.baseURL}/${id}`);
  }

  searchEnseignantById(name:string):Observable<Enseignant>{
    return this.httpClient.get<Enseignant>(`${this.baseURL}/Cherche/${name}`);
  }
  createEnseignant(enseignant:Enseignant):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,enseignant);
  }
  updateEnseignant(id:number,enseignant:Enseignant):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,enseignant);
  }
  deleteEnseignant(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
 
}
