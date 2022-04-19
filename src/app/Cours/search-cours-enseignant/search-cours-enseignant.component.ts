import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/Enseignant/enseignant';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-search-cours-enseignant',
  templateUrl: './search-cours-enseignant.component.html',
  styleUrls: ['./search-cours-enseignant.component.css']
})
export class SearchCoursEnseignantComponent implements OnInit {

  enseignantId:any=0;
  cours: any;
  enseignants: Enseignant[] = [];
  enseignant!:Enseignant;
  page:number=1;
  totalRecords!:number;

  constructor(private enseignantService:EnseignantService,
    private coursService:CoursService) { }

   
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
    this.coursService.searchCoursByEnseignantId(this.enseignantId).subscribe(data => {
      this.cours=data;
      this.totalRecords=this.cours.length;
      console.log(data);
      console.log(this.totalRecords);
    
    });
  }
  reset() {
    this.enseignantId=0;
  
     // this.cours=null;
    
  }

  retirer() {
  
    
  }

}
