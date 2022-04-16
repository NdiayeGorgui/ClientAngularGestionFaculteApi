import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/Enseignant/enseignant';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-search-groupe-enseignant',
  templateUrl: './search-groupe-enseignant.component.html',
  styleUrls: ['./search-groupe-enseignant.component.css']
})
export class SearchGroupeEnseignantComponent implements OnInit {

  enseignantId:any=0;
  groupes: any;
  enseignants: Enseignant[] = [];
  enseignant!:Enseignant;
  page:number=1;
  totalRecords!:number;

  constructor(private enseignantService:EnseignantService,
    private groupeService:GroupeService) { }

   
  ngOnInit(): void {
   this.getEnseignants();
   // this.reset();
 
  }

  handlePageChange(event: number) {
    this.page = event;
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
    this.groupeService.searchGroupeByEnseignantId(this.enseignantId).subscribe(data => {
      this.groupes=data;
      this.totalRecords=this.groupes.length;
      console.log(data);
      console.log(this.totalRecords);
    
    });
  }
  reset() {
    this.enseignantId=0;
  
     // this.cours=null;
    
  }


}
