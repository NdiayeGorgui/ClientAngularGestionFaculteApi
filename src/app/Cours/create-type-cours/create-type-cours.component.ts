import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-create-type-cours',
  templateUrl: './create-type-cours.component.html',
  styleUrls: ['./create-type-cours.component.css']
})
export class CreateTypeCoursComponent implements OnInit {
  typeCoursFormgroup!:FormGroup;
  submitted:boolean=false;
  typeCours:TypeCours=new TypeCours();
  constructor(private typeCoursService:TypeCoursService,
    private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.typeCoursFormgroup=this.fb.group({
      tType:["",Validators.required],
      tPrix:[0,Validators.required],
     
    });
    
  }

  saveTypeCours(){
    this.submitted=true;
    if(this.typeCoursFormgroup.invalid) return;
    this.typeCoursService.createTypeCours(this.typeCours).subscribe(data => {
      alert("Ajout effectué avec succés !");
      console.log(data);
      this.goToTypeCoursList();
    },
    error =>console.log(error))
  }
  goToTypeCoursList(){
    this.router.navigate(['/type-cours']);
  }
  onSubmit(){
    console.log(this.typeCours);
  
    this.saveTypeCours();
    
  }

 

}
