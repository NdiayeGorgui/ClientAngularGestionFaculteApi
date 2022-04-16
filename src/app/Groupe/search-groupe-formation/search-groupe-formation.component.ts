import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-search-groupe-formation',
  templateUrl: './search-groupe-formation.component.html',
  styleUrls: ['./search-groupe-formation.component.css']
})
export class SearchGroupeFormationComponent implements OnInit {

  formationName:any=null;
  groupes: any;
  formations: Formation[] = [];
  formation!:Formation;
  page:number=1;
  totalRecords!:number;

  constructor(private formationService:FormationService,
    private groupeService:GroupeService) { }

   
  ngOnInit(): void {
   this.getFormations();
   // this.reset();
 
  }

  handlePageChange(event: number) {
    this.page = event;
  }

  formationChange(formName: any) {
    this.onSearch(formName);
    console.log(formName);
    
   
  }
  private getFormations(){
    this.formationService.getFormationList().subscribe(data => {
      this.formations=data;
     
    });
  }

  
  onSearch(dataForm:any){
    console.log(dataForm);
    this.groupeService.searchGroupeByFormationName(this.formationName).subscribe(data => {
      this.groupes=data;
      this.totalRecords=this.groupes.length;
      console.log(data);
      console.log(this.totalRecords);
    
    });
  }
  reset() {
    this.formationName=null;
  
     // this.cours=null;
    
  }


}
