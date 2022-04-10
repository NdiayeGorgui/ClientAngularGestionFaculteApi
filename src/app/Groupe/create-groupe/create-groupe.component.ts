import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrls: ['./create-groupe.component.css']
})
export class CreateGroupeComponent implements OnInit {
  formations: Formation[] = [];
  formationid!: number;
  groupe:Groupe=new Groupe();
  constructor(private groupeService:GroupeService,
              private formationService:FormationService,
              private router:Router) { }

  ngOnInit(): void { 
    this.getFormations();
   
  }

  private getFormations(){
    this.formationService.getFormationList().subscribe(data => {
      this.formations=data;
      console.log('formation=>'+JSON.stringify(this.formations));
    });
  }
  saveGroupe(){
    this.groupeService.createGroupe(this.groupe).subscribe(data => {
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
