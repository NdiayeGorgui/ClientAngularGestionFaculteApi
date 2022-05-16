import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/Groupe/groupe';
import { GroupeService } from 'src/app/Groupe/groupe.service';
import { Enseignant } from '../enseignant';
import { Istatus } from '../enseignant-status-interface';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent implements OnInit {
  
  enseignantFormgroup!:FormGroup;
  submitted:boolean=false;
  enseignant:Enseignant=new Enseignant();
  groupes: Groupe[] = [];
  groupe!:Groupe;
  numeroGroupe!:string;
  groupeId!:number;
  public statues:Array<Istatus>=[{id:1,name:'Permanent'},
  {id:2,name:'Contractuel'},
  {id:3,name:'Vacataire'}];

  public statId!:number;

  constructor(private enseignantService:EnseignantService,
    private router:Router,private groupeService:GroupeService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.enseignantFormgroup=this.fb.group({
      eAddress:[""],
      eFirstName:["",[Validators.required, Validators.minLength(2)]],
      eLastName:["",[Validators.required, Validators.minLength(2)]],
      eMail:["",[Validators.required, Validators.email]],
      eStatut:["",Validators.required],
      eTelephone:["",[Validators.required, Validators.minLength(10)]],
      eGroupe:["",Validators.required]
    });
    this.getGroupes();
  }

  saveEnseignant(){
    this.submitted=true;
    if(this.enseignantFormgroup.invalid) return;
    this.enseignantService.createEnseignantWhithGroupe(this.enseignant,this.numeroGroupe).subscribe(data => {
      alert("Ajout effectué avec succés !");
      console.log(data);
      this.goToEnseignantList();
    },
    error =>console.log(error))
  }
  goToEnseignantList(){
    this.router.navigate(['/enseignants']);
  }
  onSubmit(){
    console.log(this.enseignant);
  
    this.saveEnseignant();
    
  }
public onChange(){
  this.statId;
  console.log(this.statId);
}

private getGroupes(){
  this.groupeService.getGroupeList().subscribe(data => {
    this.groupes=data;
   
  });
}

}
