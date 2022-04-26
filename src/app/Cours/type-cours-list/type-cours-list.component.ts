import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
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
    private router:Router,
    public authService:AuthService) { }

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
  let conf=confirm("Etes-vous sure ?")
  if(conf){
   this.typeCoursService.deleteTypeCours(id).subscribe(data => {
    alert("Suppression effectuée avec succés !");
     console.log(data);
     this.getTypeCours();
   });
  }
 }
 
 typeCoursDetails(id:number){
   this.router.navigate(['type-cours-details',id]);
 }
 
 createTypeCours(){
     this.router.navigate(['/create-type-cours']);
   }

}
