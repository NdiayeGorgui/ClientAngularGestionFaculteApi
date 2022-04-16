import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseURL="http://localhost:8090/api/Formations"
  private baseURLCours="http://localhost:8090/api/Formations/Cours"

  constructor(private httpClient:HttpClient) { }

  getFormationList():Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.baseURL}`);
  }
  getFormationById(id:number):Observable<Formation>{
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`);
  }

  searchFormationsByCoursId(name:string):Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.baseURLCours}/${name}`);
  }
  createFormation(formation:Formation):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,formation);
  }
  updateFormation(id:number,formation:Formation):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,formation);
  }
  deleteFormation(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}