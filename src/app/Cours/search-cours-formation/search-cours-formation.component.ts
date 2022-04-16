import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-search-cours-formation',
  templateUrl: './search-cours-formation.component.html',
  styleUrls: ['./search-cours-formation.component.css']
})
export class SearchCoursFormationComponent implements OnInit {

  formationName:any=null;
  cours: any;
  formations: Formation[] = [];
  formation!:Formation;
  page:number=1;
  totalRecords!:number;

  constructor(private formationService:FormationService,
    private coursService:CoursService) { }

   
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
     // this.totalRecords=this.formations.length;
    });
  }

  
  onSearch(dataForm:any){
    console.log(dataForm);
    this.coursService.searchCoursByFormationName(this.formationName).subscribe(data => {
      this.cours=data;
      this.totalRecords=this.cours.length;
      console.log(data);
      console.log(this.totalRecords);
    
    });
  }
  reset() {
    this.formationName=null;
  
     // this.cours=null;
    
  }


}
