import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-type-cours-list',
  templateUrl: './type-cours-list.component.html',
  styleUrls: ['./type-cours-list.component.css']
})
export class TypeCoursListComponent implements OnInit {

  typeCours: TypeCours[] = [];
  constructor(private typeCoursService:TypeCoursService,
    private router:Router) { }

  ngOnInit(): void {
    this.getTypeCours();
   }
 private getTypeCours(){
   this.typeCoursService.getTypeCoursList().subscribe(data => {
     this.typeCours=data;

   });
 }

 
 updateTypeCours(id:number){
   this.router.navigate(['update-type-cours',id]);
 
 }
 
 deleteTypeCours(id:number){
   this.typeCoursService.deleteTypeCours(id).subscribe(data => {
     console.log(data);
     this.getTypeCours();
   });
 }
 
 typeCoursDetails(id:number){
   this.router.navigate(['type-cours-details',id]);
 }
 
 createTypeCours(){
     this.router.navigate(['/create-type-cours']);
   }

}
