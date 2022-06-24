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

  
  //private baseURL="http://localhost:8090/api/Cours";
 // private baseURLCreateCoursWithFormation="http://localhost:8090/api/Cours/saveCoursWithFormation";
 // private baseURLAddCoursToFormation="http://localhost:8090/api/Cours/addCoursToFormation";
  //private baseURLDeleteCoursToFormation="http://localhost:8090/api/Cours/deleteCoursToFormation";
 // private baseURLEnseignant="http://localhost:8090/api/Cours/Enseignants";
 // private baseURLEnseignantHeure="http://localhost:8090/api/Cours/Enseignants/SumHours";
  //private baseURLTypeCoursHeure="http://localhost:8090/api/Cours/TypeCours/SumHours";
  //private baseURLEnseignantHeureSup="http://localhost:8090/api/Cours/Enseignants/HeureSup/SumHours";
  //private baseURLEnseignantHeureSousService="http://localhost:8090/api/Cours/Enseignants/HeureSousService/SumHours";
 // private baseURLHeureGlobal="http://localhost:8090/api/Cours/Enseignants/Global/SumHours";
 // private baseURLStatutHeure="http://localhost:8090/api/Cours/Enseignants/Statut/SumHours";
  //private baseURLFormation="http://localhost:8090/api/Cours/FormationName";

  private baseURL="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours";
  private baseURLCreateCoursWithFormation="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/saveCoursWithFormation";
  private baseURLAddCoursToFormation="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/addCoursToFormation";
  private baseURLDeleteCoursToFormation="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/deleteCoursToFormation";
  private baseURLEnseignant="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/Enseignants";
  private baseURLEnseignantHeure="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/Enseignants/SumHours";
  private baseURLTypeCoursHeure="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/TypeCours/SumHours";
  private baseURLEnseignantHeureSup="http://localhost:8090/api/Cours/Enseignants/HeureSup/SumHours";
  private baseURLEnseignantHeureSousService="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/Enseignants/HeureSousService/SumHours";
  private baseURLHeureGlobal="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/Enseignants/Global/SumHours";
  private baseURLStatutHeure="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/Enseignants/Statut/SumHours";
  private baseURLFormation="http://springbootenseignementaws-env.eba-emmnagfi.ca-central-1.elasticbeanstalk.com/api/Cours/FormationName";


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

  getNbreHeureEnseignantById(id:number):Observable<number>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<number>(`${this.baseURLEnseignantHeure}/${id}`,{headers:httpHeaders});
  }
  getNbreHeureSupEnseignantById(id:number):Observable<number>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<number>(`${this.baseURLEnseignantHeureSup}/${id}`,{headers:httpHeaders});
  }
  getNbreHeureSousServiceEnseignantById(id:number):Observable<number>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<number>(`${this.baseURLEnseignantHeureSousService}/${id}`,{headers:httpHeaders});
  }
  getNbreHeureGlobal():Observable<number>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<number>(`${this.baseURLHeureGlobal}`,{headers:httpHeaders});
  }
  getNbreHeureStatut(statut:string):Observable<number>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<number>(`${this.baseURLStatutHeure}/${statut}`,{headers:httpHeaders});
  }
  getNbreHeureTypeCoursById(id:number):Observable<number>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.httpClient.get<number>(`${this.baseURLTypeCoursHeure}/${id}`,{headers:httpHeaders});
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
