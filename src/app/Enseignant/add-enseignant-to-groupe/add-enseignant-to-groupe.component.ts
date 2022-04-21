import { Component, OnInit } from '@angular/core';
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
  groupeId!:number;
  mail!:string;
  numeroGroupe!:string;
  enseignant!:Enseignant;
  enseignantId!:number;
  groupes: Groupe[] = [];
  enseignants: Enseignant[] = [];
  constructor(private enseignantService:EnseignantService,
    private router:Router,private groupeService:GroupeService) { }

  ngOnInit(): void {
    this.getEnseigants();
    this.getGroupes();
  }

  onSubmit(){
   
    this.enseignantService.addEnseignantToGroupe(this.mail,this.numeroGroupe).subscribe(data => {
      console.log(data);
      this.goToEnseignantList();
    });
    
    
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
