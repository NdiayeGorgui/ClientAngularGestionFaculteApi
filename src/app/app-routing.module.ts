import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { CreateEnseignantComponent } from './Enseignant/create-enseignant/create-enseignant.component';
import { EnseignantDeatailsComponent } from './Enseignant/enseignant-deatails/enseignant-deatails.component';
import { EnseignantListComponent } from './Enseignant/enseignant-list/enseignant-list.component';
import { SearchEnseignantComponent } from './Enseignant/search-enseignant/search-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';
import { CreateFormationComponent } from './Formation/create-formation/create-formation.component';
import { FormationDetailsComponent } from './Formation/formation-details/formation-details.component';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';
import { UpdateFormationComponent } from './Formation/update-formation/update-formation.component';

const routes: Routes = [
  { path:'home',component:AcueilComponent},
  { path:'enseignants',component:EnseignantListComponent},
 { path:'create-enseignant',component:CreateEnseignantComponent},
 { path:'search-enseignant',component:SearchEnseignantComponent},

 { path:'',redirectTo :'home',pathMatch:'full'},
 { path:'update-enseignant/:id',component:UpdateEnseignantComponent},
 { path:'enseignant-details/:id',component:EnseignantDeatailsComponent},

 { path:'formations',component:FormationListComponent},
 { path:'create-formation',component:CreateFormationComponent},
 { path:'update-formation/:id',component:UpdateFormationComponent},
 { path:'formation-details/:id',component:FormationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
