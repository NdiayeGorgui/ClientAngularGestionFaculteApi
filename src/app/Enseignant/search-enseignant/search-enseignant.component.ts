import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { Istatus } from '../enseignant-status-interface';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-search-enseignant',
  templateUrl: './search-enseignant.component.html',
  styleUrls: ['./search-enseignant.component.css']
})
export class SearchEnseignantComponent implements OnInit {
 
  statut:string="null";
  enseignants: any;
  enseignant!:Enseignant;
  page:number=1;
  totalRecords!:number;
  public statId!:number;
  constructor(private enseignantService:EnseignantService,
    private router:Router) { }

    public statues:Array<Istatus>=[{id:1,name:'Permanent'},
  {id:2,name:'Contractuel'},
  {id:3,name:'Vacataire'}];

  ngOnInit(): void {
    this.reset(this.statut);
  }

  handlePageChange(event: number) {
    this.page = event;
  }

  statusChange(statut: string) {
    this.onSearch(statut);
  }
  
  onSearch(dataForm:any){
   
    console.log(dataForm);
    this.enseignantService.searchEnseignantsByStatut(this.statut).subscribe(data => {
      this.enseignants=data;
      this.totalRecords=this.enseignants.length;
      console.log(data);
      console.log(this.totalRecords);
    
    });
    
    
  }
  reset(statut:string) {
    this.statut = "null";
  }
 
}
