import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/Cours/cours.service';
import { Istatus } from 'src/app/Enseignant/enseignant-status-interface';


@Component({
  selector: 'app-total-heure-par-statut',
  templateUrl: './total-heure-par-statut.component.html',
  styleUrls: ['./total-heure-par-statut.component.css']
})
export class TotalHeureParStatutComponent implements OnInit {
  nbrHeureGlobal!:number;
  nbrHeure!:number;
  taux!:number;
  statut:string="";
  
  public statues:Array<Istatus>=[{id:1,name:'Permanent'},
  {id:2,name:'Contractuel'},
  {id:3,name:'Vacataire'}];

  constructor(private coursService:CoursService) { }

  ngOnInit(): void {
    this.reset(this.statut);
    this.taux
   
   }

  statusChange(statut: string) {
    this.onSearch(statut);
  }
  
  onSearch(dataForm:any){
   
    
    this.coursService.getNbreHeureStatut(this.statut).subscribe(data => {
      
      this.nbrHeure=data;
      console.log(data);   
      
      this.coursService.getNbreHeureGlobal().subscribe(data1 => {
      
        this.nbrHeureGlobal=data1;
        console.log(data1);  
        
        let res=(data/data1)*100;
        this.taux=Math.round(res);
      });
    });
    
  
  
    
  }

  reset(statut:string) {
    this.statut = "null";
  }
 

}
