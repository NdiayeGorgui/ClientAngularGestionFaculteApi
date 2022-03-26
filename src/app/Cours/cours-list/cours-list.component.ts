import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  nom!:string;
  page:number=1;
  totalRecords!:number;
  cours: Cours[] = [];
  constructor(private coursService:CoursService,
    private router:Router) { }

  ngOnInit(): void {
   this.getCours();
  }
private getCours(){
  this.coursService.getCoursList().subscribe(data => {
    this.cours=data;
    this.totalRecords=this.cours.length;
  });
}
handlePageChange(event: number) {
  this.page = event;
}

updateCours(id:number){
  this.router.navigate(['update-cours',id]);

}

deleteCours(id:number){
  this.coursService.deleteCours(id).subscribe(data => {
    console.log(data);
    this.getCours();
  });
}

coursDetails(id:number){
  this.router.navigate(['cours-details',id]);
}
searchTitle(){
  if(this.nom!=""){
    this.cours=this.cours.filter(res=>{
      return res.libelle.toLowerCase().match(this.nom.toLowerCase());
    });
  }else if(this.nom==""){
    this.ngOnInit();
  }

}
createCours(){
    this.router.navigate(['/create-cours']);
  }


}
