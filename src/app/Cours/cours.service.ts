import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from './cours';
const httOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  
  private baseURL="http://localhost:8090/api/Cours"

  constructor(private httpClient:HttpClient) { }

  getCoursList():Observable<Cours[]>{
    return this.httpClient.get<Cours[]>(`${this.baseURL}`);
  }
  getCoursById(id:number):Observable<Cours>{
    return this.httpClient.get<Cours>(`${this.baseURL}/${id}`);
  }
  createCours(cours:Cours):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cours,httOptions);
  }
  updateCours(id:number,cours:Cours):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cours);
  }
  deleteCours(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
