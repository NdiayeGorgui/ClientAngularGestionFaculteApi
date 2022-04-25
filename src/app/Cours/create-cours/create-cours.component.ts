import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/Enseignant/enseignant';
import { EnseignantService } from 'src/app/Enseignant/enseignant.service';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrls: ['./create-cours.component.css']
})
export class CreateCoursComponent implements OnInit {
  coursFormgroup!:FormGroup;
  submitted:boolean=false;
  id!: number;
  typecourid!: number;
  enseignantid!:number;
  formationId!:number;
  nomFormation!:string;
  formation!:Formation;
  enseignants: Enseignant[] = [];
  formations: Formation[] = [];
  typecours: TypeCours[] = [];
  courss: Cours[] = [];
  libelle!:string;
  nbeHeure!:Number;
  enseignant!:Enseignant;
  typecour!:TypeCours;
  
  cours:Cours=new Cours();
 
  constructor(private coursService:CoursService,
              private enseignantService:EnseignantService,
              private typeCoursService:TypeCoursService,
              private route:ActivatedRoute,private formationService:FormationService,
              private router:Router,private fb:FormBuilder) {

               }
  

  ngOnInit(): void { 
    this.coursFormgroup=this.fb.group({
      cLibelle:["",Validators.required],
      cNbrHeure:["",Validators.required],
      cEnseignant:[null,Validators.required],
      cTypeCours:[null,Validators.required],
      cFormation:[null,Validators.required]
    });
    
    this.getEnseignants();
    this.getTypeCours();
    this.getFormations();
   
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
 
  
  
  saveCours(){
    this.submitted=true;
    if(this.coursFormgroup.invalid) return;
    this.coursService.createCoursWithFormation(this.cours,this.nomFormation).subscribe(data => {
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

  private getFormations(){
    this.formationService.getFormationList().subscribe(data => {
      this.formations=data;
     
    });
  }

}
