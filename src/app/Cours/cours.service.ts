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

  
  private baseURL="http://localhost:8090/api/Cours";
  private baseURLCreateCoursWithFormation="http://localhost:8090/api/Cours/saveCoursWithFormation";
  private baseURLAddCoursToFormation="http://localhost:8090/api/Cours/addCoursToFormation";
  private baseURLDeleteCoursToFormation="http://localhost:8090/api/Cours/deleteCoursToFormation";
  private baseURLEnseignant="http://localhost:8090/api/Cours/Enseignants";
  private baseURLFormation="http://localhost:8090/api/Cours/FormationName";

  constructor(private httpClient:HttpClient) { }

  getCoursList():Observable<Cours[]>{
    return this.httpClient.get<Cours[]>(`${this.baseURL}`);
  }
  getCoursById(id:number):Observable<Cours>{
    return this.httpClient.get<Cours>(`${this.baseURL}/${id}`);
  }

  searchCoursByEnseignantId(id:number):Observable<Cours[]>{
    return this.httpClient.get<Cours[]>(`${this.baseURLEnseignant}/${id}`);
  }
  searchCoursByFormationName(name:string):Observable<Cours[]>{
    return this.httpClient.get<Cours[]>(`${this.baseURLFormation}/${name}`);
  }
  createCours(cours:Cours):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cours,httOptions);
  }
  createCoursWithFormation(cours:Cours,formation:string):Observable<Object>{
    return this.httpClient.post(`${this.baseURLCreateCoursWithFormation}/${formation}`,cours);
  }
  updateCours(id:number,cours:Cours):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cours);
  }
  deleteCours(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  addCoursToFormation(libelle:string,formation:string):Observable<Object>{
    return this.httpClient.post(`${this.baseURLAddCoursToFormation}/${libelle}/${formation}`,httOptions);
  }

  deleteCoursToFormation(libelle:string,formation:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseURLDeleteCoursToFormation}/${libelle}/${formation}`,httOptions);
  }
}
