import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/Enseignant/enseignant';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.css']
})
export class UpdateCoursComponent implements OnInit {

  id!: number;
  cours:Cours=new Cours();
  enseignants: Enseignant[] = [];
  typecours: TypeCours[] = [];
  courss: Cours[] = [];
 // cours!:Cours
constructor(private coursService:CoursService, 
  private route:ActivatedRoute, private router:Router,
  private enseignantService:EnseignantService,
  private typeCoursService:TypeCoursService,) { }

ngOnInit(): void {
  this.getEnseignants();
  this.getTypeCours();
  this.getCours();
  this.id=this.route.snapshot.params['id'];
  this.coursService.getCoursById(this.id).subscribe(data => {
    this.cours=data;
  },error =>console.log(error)
  );

}

private getEnseignants(){
  this.enseignantService.getEnseignantList().subscribe(data => {
    console.log(data);
    this.enseignants=data;
    console.log('enseignants=>'+JSON.stringify(this.enseignants));
  
  }); 
 
}

private getTypeCours(){
  this.typeCoursService.getTypeCoursList().subscribe(data => {
    console.log(data);
    this.typecours=data;
    console.log('typeCours=>'+JSON.stringify(this.typecours));
  
  }); 
 
}

private getCours(){
  this.coursService.getCoursList().subscribe(data => {
    console.log(data);
    this.courss=data;
    console.log('Cours=>'+JSON.stringify(this.cours));
  
  }); 
 
}
goToCoursList(){
  this.router.navigate(['/cours']);
}
onSubmit(){
  this.coursService.updateCours(this.id,this.cours).subscribe(data =>{
  this.goToCoursList();
  },error =>console.log(error)
  
  );
}

}
