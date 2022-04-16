import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/Cours/cours';
import { CoursService } from 'src/app/Cours/cours.service';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-search-formation-cours',
  templateUrl: './search-formation-cours.component.html',
  styleUrls: ['./search-formation-cours.component.css']
})
export class SearchFormationCoursComponent implements OnInit {

  coursId:any=0;
  formations: any;
  cours: Cours[] = [];
  page:number=1;
  totalRecords!:number;
  
  constructor(private formationService:FormationService,private coursService:CoursService) { }

   

  ngOnInit(): void {
    this.getCours();
  }

  private getCours(){
    this.coursService.getCoursList().subscribe(data => {
      this.cours=data;
    });
  }

  handlePageChange(event: number) {
    this.page = event;
  }

  coursChange(crId: number) {
    this.onSearch(crId);
  }
  
  onSearch(dataForm:any){
   
    console.log(dataForm);
    this.formationService.searchFormationsByCoursId(this.coursId).subscribe(data => {
      this.formations=data;
      this.totalRecords=this.formations.length;
      console.log(data);
      console.log(this.totalRecords);
    });
  }

  reset() {
    this.coursId = 0;
  }

}
