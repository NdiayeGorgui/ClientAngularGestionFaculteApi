import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnseignantComponent } from './Enseignant/create-enseignant/create-enseignant.component';
import { EnseignantDeatailsComponent } from './Enseignant/enseignant-deatails/enseignant-deatails.component';
import { EnseignantListComponent } from './Enseignant/enseignant-list/enseignant-list.component';
import { SearchEnseignantComponent } from './Enseignant/search-enseignant/search-enseignant.component';
import { UpdateEnseignantComponent } from './Enseignant/update-enseignant/update-enseignant.component';

const routes: Routes = [
  { path:'enseignants',component:EnseignantListComponent},
 { path:'create-enseignant',component:CreateEnseignantComponent},
 { path:'search-enseignant',component:SearchEnseignantComponent},
 
 { path:'',redirectTo :'enseignants',pathMatch:'full'},
 { path:'update-enseignant/:id',component:UpdateEnseignantComponent},
 { path:'enseignant-details/:id',component:EnseignantDeatailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
