import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Cours/cours';
import { CoursService } from 'src/app/Cours/cours.service';
import { TypeCours } from 'src/app/Cours/type-cours';
import { TypeCoursService } from 'src/app/Cours/type-cours.service';

@Component({
  selector: 'app-total-heure-par-typecours',
  templateUrl: './total-heure-par-typecours.component.html',
  styleUrls: ['./total-heure-par-typecours.component.css']
})
export class TotalHeureParTypecoursComponent implements OnInit {

  nbrHeure:number=0;
  nbrHeureGlobal:number=1;
  taux:number=0;
  typeCoursId:number=0;
  cours: Cours[] = [];
  typeCours: TypeCours[] = [];
  constructor(private coursService:CoursService, private typeCoursService:TypeCoursService) { }

  ngOnInit(): void {
    this.getTypeCours();
   
   }
 
   typeCoursChange(id: any) {
   
     this.onSearch(id);
     console.log(id);
     
   }
   private getTypeCours(){
     this.typeCoursService.getTypeCoursList().subscribe(data => {
       this.typeCours=data;
   
     });

    
   }

   onSearch(dataForm:any){
     console.log(dataForm);
     this.coursService.getNbreHeureTypeCoursById(this.typeCoursId).subscribe(data => {
       this.nbrHeure=data;
     
     });

     this.coursService.getNbreHeureGlobal().subscribe(data => {
      this.nbrHeureGlobal=data;
      console.log(data);
    });

     let res=(this.nbrHeure/this.nbrHeureGlobal)*100;
     this.taux=Math.round(res);
    }
   reset() {
     this.typeCoursId=0;
   
   }

  }

