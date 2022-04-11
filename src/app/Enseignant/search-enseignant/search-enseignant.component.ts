import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-search-enseignant',
  templateUrl: './search-enseignant.component.html',
  styleUrls: ['./search-enseignant.component.css']
})
export class SearchEnseignantComponent implements OnInit {
  motCle!:string;
  enseignants: Enseignant[] = [];
  enseignant!:Enseignant;
  page:number=1;
  totalRecords!:number;
  constructor(private enseignantService:EnseignantService,
    private router:Router) { }

  ngOnInit(): void {
   
  }

  private getEnseignantsByValue(){
    
    this.enseignantService.searchEnseignantsByValue(this.motCle).subscribe(data => {
      this.enseignants=data;
      this.totalRecords=this.enseignants.length;
      console.log(data);
      console.log(this.totalRecords);
    });
  }
  
  onSearch(dataForm:string){
    this.motCle=dataForm;
    console.log(this.motCle);
    this.enseignantService.searchEnseignantsByValue(this.motCle).subscribe(data => {
      this.enseignants=data;
      this.totalRecords=this.enseignants.length;
      console.log(data);
      console.log(this.totalRecords);
    
    });
    
    
  }

}
