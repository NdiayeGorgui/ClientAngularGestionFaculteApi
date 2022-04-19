import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/Groupe/groupe';
import { GroupeService } from 'src/app/Groupe/groupe.service';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-search-enseignant-groupe',
  templateUrl: './search-enseignant-groupe.component.html',
  styleUrls: ['./search-enseignant-groupe.component.css']
})
export class SearchEnseignantGroupeComponent implements OnInit {

  groupeId:any=0;
  enseignants: any;
  groupes: Groupe[] = [];
  enseignant!:Enseignant;
  page:number=1;
  totalRecords!:number;
  
  constructor(private enseignantService:EnseignantService,private groupeService:GroupeService) { }

   

  ngOnInit(): void {
    this.getGroupes();
   // this.reset();
  }

  private getGroupes(){
    this.groupeService.getGroupeList().subscribe(data => {
      this.groupes=data;
    });
  }

  handlePageChange(event: number) {
    this.page = event;
  }

  groupeChange(grId: number) {
    this.onSearch(grId);
  }
  
  onSearch(dataForm:any){
   
    console.log(dataForm);
    this.enseignantService.searchEnseignantsByGroupeId(this.groupeId).subscribe(data => {
      this.enseignants=data;
      this.totalRecords=this.enseignants.length;
      console.log(data);
      console.log(this.totalRecords);
    });
  }

  reset() {
    this.groupeId = 0;
  }

  retirer() {
    
  }

}
