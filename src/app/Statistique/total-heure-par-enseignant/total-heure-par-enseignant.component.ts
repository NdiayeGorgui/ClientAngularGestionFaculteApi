import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Cours/cours';
import { CoursService } from 'src/app/Cours/cours.service';
import { Enseignant } from 'src/app/Enseignant/enseignant';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';

@Component({
  selector: 'app-total-heure-par-enseignant',
  templateUrl: './total-heure-par-enseignant.component.html',
  styleUrls: ['./total-heure-par-enseignant.component.css']
})
export class TotalHeureParEnseignantComponent implements OnInit {
  nbrHeure!:number;
  heureSup!:number;
  heureSousService!:number;
  enseignantId:number=0;
  cours: Cours[] = [];
  enseignants: Enseignant[] = [];
  constructor(private coursService:CoursService, private enseignantService:EnseignantService) { }

  ngOnInit(): void {
    this.getEnseignants();
   
   }
 
  
 
   enseignantChange(id: any) {
     this.onSearch(id);
     console.log(id);
     
    
   }
   private getEnseignants(){
     this.enseignantService.getEnseignantList().subscribe(data => {
       this.enseignants=data;
   
     });
   }

   onSearch(dataForm:any){
     console.log(dataForm);
     this.coursService.getNbreHeureEnseignantById(this.enseignantId).subscribe(data => {
       this.nbrHeure=data;
     
     });

     this.coursService.getNbreHeureSupEnseignantById(this.enseignantId).subscribe(data => {
      this.heureSup=data;
    
    });

    this.coursService.getNbreHeureSousServiceEnseignantById(this.enseignantId).subscribe(data => {
      this.heureSousService=data;
    
    });
   }

   reset() {
     this.enseignantId=0;
   
   }
 
}
