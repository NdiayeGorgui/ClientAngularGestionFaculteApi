import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/Enseignant/enseignant';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrls: ['./create-cours.component.css']
})
export class CreateCoursComponent implements OnInit {
  id!: number;
  enseignants: Enseignant[] = [];
  cours:Cours=new Cours();
  constructor(private coursService:CoursService,private enseignantService:EnseignantService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { 
   
    this.getEnseignants();
  
  }
  private getEnseignants(){
   
    this.enseignantService.getEnseignantList().subscribe(data => {
      this.enseignants=data;
      console.log('enseignants=>'+JSON.stringify(this.enseignants));
    });
  }
  saveCours(){
    let cours = { libelle: this.cours.libelle, nbeHeure: this.cours.nbeHeure,enseignant:{id:this.cours.enseignantId},typecour:{id:null} };
    this.id=this.route.snapshot.params['id'];
    this.coursService.createCours(this.cours).subscribe(data => {
      console.log(data);
      this.goToCoursList();
    },
    error =>console.log(error))
  }
  goToCoursList(){
    this.router.navigate(['/cours']);
  }
  onSubmit(){
    console.log(this.cours);
  
    this.saveCours();
    
  }

  onCancel(){
    this.router.navigate(['/cours']);
    
  }

}
