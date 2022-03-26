import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
