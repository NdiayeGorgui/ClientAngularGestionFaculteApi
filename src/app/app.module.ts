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
