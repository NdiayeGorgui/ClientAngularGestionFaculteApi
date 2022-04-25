import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {
  formationFormgroup!:FormGroup;
  submitted:boolean=false;
  formation:Formation=new Formation();
  constructor(private formationService:FormationService,
    private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.formationFormgroup=this.fb.group({
      nFormation:["",Validators.required],
      nDuree:["",Validators.required],
      nAnnee:["",Validators.required]
    });
  }

  saveFormation(){
    this.submitted=true;
    if(this.formationFormgroup.invalid) return;
    this.formationService.createFormation(this.formation).subscribe(data => {
      console.log(data);
      this.goToFormationList();
    },
    error =>console.log(error))
  }
  goToFormationList(){
    this.router.navigate(['/formations']);
  }
  onSubmit(){
    console.log(this.formation);
  
    this.saveFormation();
    
  }


}
