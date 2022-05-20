import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { ComponentValidatorService } from 'src/app/Validator/component-validator.service';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrls: ['./create-groupe.component.css']
})
export class CreateGroupeComponent implements OnInit {
  groupeFormgroup!:FormGroup;
  submitted:boolean=false;
  formations: Formation[] = [];
  formationid!: number;
  groupe:Groupe=new Groupe();
  constructor(private groupeService:GroupeService,
              private formationService:FormationService,
              private componentvalidatorService:ComponentValidatorService,
              private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.groupeFormgroup=this.fb.group({
      nGroupe:["",[Validators.required],this.componentvalidatorService.validateUniqueNumeroGroupe.bind(this.componentvalidatorService)],
      nFormation:[null,Validators.required],
    });
    this.getFormations();
   
  }

  private getFormations(){
    this.formationService.getFormationList().subscribe(data => {
      this.formations=data;
      console.log('formation=>'+JSON.stringify(this.formations));
    });
  }
  saveGroupe(){
    this.submitted=true;
    if(this.groupeFormgroup.invalid) return;
    this.groupeService.createGroupe(this.groupe).subscribe(data => {
      alert("Ajout effectué avec succés !");
      console.log(data);
      this.goToGroupeList();
    },
    error =>console.log(error))
  }
  goToGroupeList(){
    this.router.navigate(['/groupes']);
  }
  onSubmit(){
    console.log(this.groupe);
  
    this.saveGroupe();
    
  }

}
