import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/Groupe/groupe';
import { GroupeService } from 'src/app/Groupe/groupe.service';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-add-enseignant-to-groupe',
  templateUrl: './add-enseignant-to-groupe.component.html',
  styleUrls: ['./add-enseignant-to-groupe.component.css']
})
export class AddEnseignantToGroupeComponent implements OnInit {
  enseignantGroupeFormgroup!:FormGroup;
  submitted:boolean=false;
  groupeId!:number;
  mail!:string;
  numeroGroupe!:string;
  enseignant!:Enseignant;
  enseignantId!:number;
  groupes: Groupe[] = [];
  enseignants: Enseignant[] = [];
  constructor(private enseignantService:EnseignantService,
    private router:Router,private groupeService:GroupeService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.enseignantGroupeFormgroup=this.fb.group({
      egEnseignant:["",Validators.required],
      egGroupe:["",Validators.required]
    });
    this.getEnseigants();
    this.getGroupes();
  }

  onSubmit(){
    this.submitted=true;
    if(this.enseignantGroupeFormgroup.invalid) return;
    this.enseignantService.addEnseignantToGroupe(this.mail,this.numeroGroupe).subscribe(data => {
      console.log(data);
      alert("Enseignant ajouté au groupe avec succés !");
    });
    
    
  }
  onRemove(){
    this.submitted=true;
    if(this.enseignantGroupeFormgroup.invalid) return;
    let conf=confirm("Etes-vous sure ?")
    if(conf){
    this.enseignantService.deleteEnseignantToGroupe(this.mail,this.numeroGroupe).subscribe(data => {
      console.log(data);
      alert("Enseignant retiré du groupe avec succés !");
    });
    
  }
  }
  goToEnseignantList(){
    this.router.navigate(['/enseignants']);
  }
public onChangeGroupe(){
  //this.statId;
 // console.log(this.statId);
}

private getGroupes(){
  this.groupeService.getGroupeList().subscribe(data => {
    this.groupes=data;
   
  });
}


public onChangeEnseignant(){
//this.statId;
//console.log(this.statId);
}

private getEnseigants(){
this.enseignantService.getEnseignantList().subscribe(data => {
  this.enseignants=data;
 
});
}

reset(){

}
}
