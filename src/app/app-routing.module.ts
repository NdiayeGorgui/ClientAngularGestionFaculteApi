import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { AddCoursToFormationComponent } from './Cours/add-cours-to-formation/add-cours-to-formation.component';
import { CoursDetailsComponent } from './Cours/cours-details/cours-details.component';
import { CoursListComponent } from './Cours/cours-list/cours-list.component';
import { CreateCoursComponent } from './Cours/create-cours/create-cours.component';
import { CreateTypeCoursComponent } from './Cours/create-type-cours/create-type-cours.component';
import { SearchCoursEnseignantComponent } from './Cours/search-cours-enseignant/search-cours-enseignant.component';
import { SearchCoursFormationComponent } from './Cours/search-cours-formation/search-cours-formation.component';
import { TypeCoursDetailsComponent } from './Cours/type-cours-details/type-cours-details.component';
import { TypeCoursListComponent } from './Cours/type-cours-list/type-cours-list.component';
import { UpdateCoursComponent } from './Cours/update-cours/update-cours.component';
import { UpdateTypeCoursComponent } from './Cours/update-type-cours/update-type-cours.component';
import { AddEnseignantToGroupeComponent } from './Enseignant/add-enseignant-to-groupe/add-enseignant-to-groupe.component';
import { CreateEnseignantComponent } from './Enseignant/create-enseignant/create-enseignant.component';
import { EnseignantDeatailsComponent } from './Enseignant/enseignant-deatails/enseignant-deatails.component';
import { EnseignantListComponent } from './Enseignant/enseignant-list/enseignant-list.component';
import { SearchEnseignantGroupeComponent } from './Enseignant/search-enseignant-groupe/search-enseignant-groupe.component';
import { SearchEnseignantComponent } from './Enseignant/search-enseignant/search-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { CreateFormationComponent } from './Formation/create-formation/create-formation.component';
import { FormationDetailsComponent } from './Formation/formation-details/formation-details.component';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';
import { SearchFormationCoursComponent } from './Formation/search-formation-cours/search-formation-cours.component';
import { UpdateFormationComponent } from './Formation/update-formation/update-formation.component';
import { CreateGroupeComponent } from './Groupe/create-groupe/create-groupe.component';
import { GroupeDetailsComponent } from './Groupe/groupe-details/groupe-details.component';
import { GroupeListComponent } from './Groupe/groupe-list/groupe-list.component';
import { SearchGroupeEnseignantComponent } from './Groupe/search-groupe-enseignant/search-groupe-enseignant.component';
import { SearchGroupeFormationComponent } from './Groupe/search-groupe-formation/search-groupe-formation.component';
import { UpdateGroupeComponent } from './Groupe/update-groupe/update-groupe.component';
import { EnseignementGuard } from './Guard/enseignement.guard';
import { ForbiddenComponent } from './Guard/forbidden/forbidden.component';
import { LoginComponent } from './Login/login/login.component';
import { AddRoleToUserComponent } from './Role/add-role-to-user/add-role-to-user.component';
import { CreateRoleComponent } from './Role/create-role/create-role.component';
import { RoleDetailsComponent } from './Role/role-details/role-details.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { SearchRoleUsersComponent } from './Role/search-role-users/search-role-users.component';
import { UpdateRoleComponent } from './Role/update-role/update-role.component';
import { InfoComponent } from './Statistique/info/info.component';
import { TotalHeureParEnseignantComponent } from './Statistique/total-heure-par-enseignant/total-heure-par-enseignant.component';
import { TotalHeureParStatutComponent } from './Statistique/total-heure-par-statut/total-heure-par-statut.component';
import { TotalHeureParTypecoursComponent } from './Statistique/total-heure-par-typecours/total-heure-par-typecours.component';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { UserListComponent } from './User/user-list/user-list.component';

const routes: Routes = [
 { path:'',redirectTo :'home',pathMatch:'full'},

 { path:'home',component:AcueilComponent},
 { path:'login',component:LoginComponent},

 { path:'enseignants',component:EnseignantListComponent},
 { path:'create-enseignant',component:CreateEnseignantComponent,canActivate:[EnseignementGuard]},
 { path:'add-enseignant-to-groupe',component:AddEnseignantToGroupeComponent,canActivate:[EnseignementGuard]},
 { path:'search-enseignant',component:SearchEnseignantComponent},
 { path:'search-enseignant-groupe',component:SearchEnseignantGroupeComponent},
 { path:'update-enseignant/:id',component:UpdateEnseignantComponent,canActivate:[EnseignementGuard]},
 { path:'enseignant-details/:id',component:EnseignantDeatailsComponent},

 { path:'formations',component:FormationListComponent},
 { path:'create-formation',component:CreateFormationComponent,canActivate:[EnseignementGuard]},
 { path:'update-formation/:id',component:UpdateFormationComponent,canActivate:[EnseignementGuard]},
 { path:'formation-details/:id',component:FormationDetailsComponent},
 { path:'search-formation-cours',component:SearchFormationCoursComponent},
 
 { path:'type-cours',component:TypeCoursListComponent},
 { path:'create-type-cours',component:CreateTypeCoursComponent,canActivate:[EnseignementGuard]},
 { path:'update-type-cours/:id',component:UpdateTypeCoursComponent,canActivate:[EnseignementGuard]},
 { path:'type-cours-details/:id',component:TypeCoursDetailsComponent},
 { path:'search-cours-enseignant',component:SearchCoursEnseignantComponent},
 { path:'search-cours-formation',component:SearchCoursFormationComponent},

 { path:'cours',component:CoursListComponent},
 { path:'create-cours',component:CreateCoursComponent,canActivate:[EnseignementGuard]},
 { path:'add-cours-formation',component:AddCoursToFormationComponent,canActivate:[EnseignementGuard]},
 { path:'update-cours/:id',component:UpdateCoursComponent,canActivate:[EnseignementGuard]},
 { path:'cours-details/:id',component:CoursDetailsComponent},

 { path:'groupes',component:GroupeListComponent},
 { path:'create-groupe',component:CreateGroupeComponent,canActivate:[EnseignementGuard]},
 { path:'update-groupe/:id',component:UpdateGroupeComponent,canActivate:[EnseignementGuard]},
 { path:'groupe-details/:id',component:GroupeDetailsComponent},
 { path:'search-groupe-formation',component:SearchGroupeFormationComponent},
 { path:'search-groupe-enseignant',component:SearchGroupeEnseignantComponent},
 

 { path:'users',component:UserListComponent},
 { path:'create-user',component:CreateUserComponent,canActivate:[EnseignementGuard]},
 { path:'add-role-to-user',component:AddRoleToUserComponent,canActivate:[EnseignementGuard]},
 { path:'update-user/:id',component:UpdateUserComponent,canActivate:[EnseignementGuard]},
 { path:'user-details/:id',component:UserDetailsComponent},

 { path:'roles',component:RoleListComponent},
 { path:'create-role',component:CreateRoleComponent,canActivate:[EnseignementGuard]},
 { path:'update-role/:id',component:UpdateRoleComponent,canActivate:[EnseignementGuard]},
 { path:'role-details/:id',component:RoleDetailsComponent},
 { path:'search-role-to-user',component:SearchRoleUsersComponent},

 { path:'total-heure-par-enseignant',component:TotalHeureParEnseignantComponent,canActivate:[EnseignementGuard]},
 { path:'total-heure-par-type-cours',component:TotalHeureParTypecoursComponent,canActivate:[EnseignementGuard]},
 { path:'total-heure-par-statut',component:TotalHeureParStatutComponent,canActivate:[EnseignementGuard]},
 { path:'info',component:InfoComponent,canActivate:[EnseignementGuard]},

 { path:'forbidden',component:ForbiddenComponent},
 

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
