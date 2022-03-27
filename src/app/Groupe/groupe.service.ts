import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groupe } from './groupe';
const httOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  
  private baseURL="http://localhost:8090/api/Groupes"

  constructor(private httpClient:HttpClient) { }

  getGroupeList():Observable<Groupe[]>{
    return this.httpClient.get<Groupe[]>(`${this.baseURL}`);
  }
  getGroupeById(id:number):Observable<Groupe>{
    return this.httpClient.get<Groupe>(`${this.baseURL}/${id}`);
  }

 
  createGroupe(groupe:Groupe):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,groupe,httOptions);
  }
  updateGroupe(id:number,groupe:Groupe):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,groupe);
  }
  deleteGroupe(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
