import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoursService } from '../Cours/cours.service';
import { EnseignantService } from '../Enseignant/enseignant.service';
import { FormationService } from '../Formation/formation.service';
import { GroupeService } from '../Groupe/groupe.service';
import { AuthService } from '../Login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentValidatorService {

  constructor(private enseignantService:EnseignantService,
    private coursService:CoursService, private formationService:FormationService,
    private groupeService:GroupeService, private authService:AuthService) { }

  validateUniqueEmail(controle:AbstractControl){
    return this.checkUniqueEmail(controle.value).pipe(
      map(res => {
        return res ? null:{emailUnique:true};
      })
    ); 
  }

  checkUniqueEmail(email:string):Observable<boolean>{
    return this.enseignantService.getEnseignantList().pipe(
      map((enseignants:Array<any>) => 
         enseignants.filter(enseignants=>enseignants.mail===email)
      ),
      map(enseignants=>!enseignants.length)
      );
    
  }

  checkUniqueLibelle(libelle:string):Observable<boolean>{
    return this.coursService.getCoursList().pipe(
      map((cours:Array<any>) => 
         cours.filter(cours=>cours.libelle===libelle)
      ),
      map(cours=>!cours.length)
      );
    
  }

  validateUniqueLibelle(controle:AbstractControl){
    return this.checkUniqueLibelle(controle.value).pipe(
      map(res => {
        return res ? null:{libelleUnique:true};
      })
    ); 
    
  }

  checkUniqueNomFormation(nomFormation:string):Observable<boolean>{
    return this.formationService.getFormationList().pipe(
      map((formations:Array<any>) => 
      formations.filter(formations=>formations.nomFormation===nomFormation)
      ),
      map(formations=>!formations.length)
      );
    
  }

  validateUniqueNomFormation(controle:AbstractControl){
    return this.checkUniqueNomFormation(controle.value).pipe(
      map(res => {
        return res ? null:{formationUnique:true};
      })
    ); 
    
  }

  checkUniqueNumeroGroupe(numeroGroupe:string):Observable<boolean>{
    return this.groupeService.getGroupeList().pipe(
      map((groupes:Array<any>) => 
      groupes.filter(groupes=>groupes.numeroGroupe===numeroGroupe)
      ),
      map(groupes=>!groupes.length)
      );
    
  }

  validateUniqueNumeroGroupe(controle:AbstractControl){
    return this.checkUniqueNumeroGroupe(controle.value).pipe(
      map(res => {
        return res ? null:{groupeUnique:true};
      })
    ); 
    
  }

  checkUniqueUserName(userName:string):Observable<boolean>{
    return this.authService.getUserList().pipe(
      map((users:Array<any>) => 
      users.filter(users=>users.userName===userName)
      ),
      map(users=>!users.length)
      );
    
  }

  validateUniqueUserName(controle:AbstractControl){
    return this.checkUniqueUserName(controle.value).pipe(
      map(res => {
        return res ? null:{userNameUnique:true};
      })
    ); 
    
  }

  checkUniqueRoleName(roleName:string):Observable<boolean>{
    return this.authService.getRolesList().pipe(
      map((roles:Array<any>) => 
      roles.filter(roles=>roles.roleName===roleName)
      ),
      map(roles=>!roles.length)
      );
    
  }

  validateUniqueRoleName(controle:AbstractControl){
    return this.checkUniqueRoleName(controle.value).pipe(
      map(res => {
        return res ? null:{roleNameUnique:true};
      })
    ); 
    
  }
}
