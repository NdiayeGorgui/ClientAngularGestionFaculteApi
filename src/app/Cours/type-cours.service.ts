import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeCours } from './type-cours';

@Injectable({
  providedIn: 'root'
})
export class TypeCoursService {

  private baseURL="http://localhost:8090/api/TypeCours"

  constructor(private httpClient:HttpClient) { }

  getTypeCoursList():Observable<TypeCours[]>{
    return this.httpClient.get<TypeCours[]>(`${this.baseURL}`);
  }
  getTypeCoursById(id:number):Observable<TypeCours>{
    return this.httpClient.get<TypeCours>(`${this.baseURL}/${id}`);
  }

 
  createTypeCours(typeCours:TypeCours):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,typeCours);
  }
  updateTypeCours(id:number,typeCours:TypeCours):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,typeCours);
  }
  deleteTypeCours(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
