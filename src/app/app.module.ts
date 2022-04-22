import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { EnseignantListComponent } from './Enseignant/enseignant-list/enseignant-list.component';
import { CreateEnseignantComponent } from './Enseignant/create-enseignant/create-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { SearchEnseignantComponent } from './Enseignant/search-enseignant/search-enseignant.component';
import { EnseignantDeatailsComponent } from './Enseignant/enseignant-deatails/enseignant-deatails.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';
import { CreateFormationComponent } from './Formation/create-formation/create-formation.component';
import { UpdateFormationComponent } from './Formation/update-formation/update-formation.component';
import { FormationDetailsComponent } from './Formation/formation-details/formation-details.component';
import { TypeCoursListComponent } from './Cours/type-cours-list/type-cours-list.component';
import { TypeCoursDetailsComponent } from './Cours/type-cours-details/type-cours-details.component';
import { CreateTypeCoursComponent } from './Cours/create-type-cours/create-type-cours.component';
import { UpdateTypeCoursComponent } from './Cours/update-type-cours/update-type-cours.component';
import { CoursListComponent } from './Cours/cours-list/cours-list.component';
import { CoursDetailsComponent } from './Cours/cours-details/cours-details.component';
import { CreateCoursComponent } from './Cours/create-cours/create-cours.component';
import { UpdateCoursComponent } from './Cours/update-cours/update-cours.component';
import { GroupeListComponent } from './Groupe/groupe-list/groupe-list.component';
import { GroupeDetailsComponent } from './Groupe/groupe-details/groupe-details.component';
import { CreateGroupeComponent } from './Groupe/create-groupe/create-groupe.component';
import { UpdateGroupeComponent } from './Groupe/update-groupe/update-groupe.component';
import { LoginComponent } from './Login/login/login.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { ForbiddenComponent } from './Guard/forbidden/forbidden.component';
import { SearchCoursEnseignantComponent } from './Cours/search-cours-enseignant/search-cours-enseignant.component';
import { SearchCoursFormationComponent } from './Cours/search-cours-formation/search-cours-formation.component';
import { SearchEnseignantGroupeComponent } from './Enseignant/search-enseignant-groupe/search-enseignant-groupe.component';
import { SearchGroupeFormationComponent } from './Groupe/search-groupe-formation/search-groupe-formation.component';
import { SearchGroupeEnseignantComponent } from './Groupe/search-groupe-enseignant/search-groupe-enseignant.component';
import { SearchFormationCoursComponent } from './Formation/search-formation-cours/search-formation-cours.component';
import { CreateUserRoleComponent } from './User/create-user-role/create-user-role.component';
import { CreateRoleComponent } from './Role/create-role/create-role.component';
import { UpdateRoleComponent } from './Role/update-role/update-role.component';
import { RoleDetailsComponent } from './Role/role-details/role-details.component';
import { AddRoleToUserComponent } from './Role/add-role-to-user/add-role-to-user.component';
import { AddEnseignantToGroupeComponent } from './Enseignant/add-enseignant-to-groupe/add-enseignant-to-groupe.component';
import { AddCoursToFormationComponent } from './Cours/add-cours-to-formation/add-cours-to-formation.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { SearchRoleUsersComponent } from './Role/search-role-users/search-role-users.component';






@NgModule({
  declarations: [
    AppComponent,
    EnseignantListComponent,
    CreateEnseignantComponent,
    UpdateEnseignantComponent,
    SearchEnseignantComponent,
    EnseignantDeatailsComponent,
    FormationListComponent,
    CreateFormationComponent,
    UpdateFormationComponent,
    FormationDetailsComponent,
    TypeCoursListComponent,
    TypeCoursDetailsComponent,
    CreateTypeCoursComponent,
    UpdateTypeCoursComponent,
    CoursListComponent,
    CoursDetailsComponent,
    CreateCoursComponent,
    UpdateCoursComponent,
    GroupeListComponent,
    GroupeDetailsComponent,
    CreateGroupeComponent,
    UpdateGroupeComponent,
    LoginComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    ForbiddenComponent,
    SearchCoursEnseignantComponent,
    SearchCoursFormationComponent,
    SearchEnseignantGroupeComponent,
    SearchGroupeFormationComponent,
    SearchGroupeEnseignantComponent,
    SearchFormationCoursComponent,
    CreateUserRoleComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
    RoleDetailsComponent,
    AddRoleToUserComponent,
    AddEnseignantToGroupeComponent,
    AddCoursToFormationComponent,
    RoleListComponent,
    SearchRoleUsersComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,NgxPaginationModule,HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
