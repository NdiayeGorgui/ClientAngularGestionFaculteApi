import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-update-groupe',
  templateUrl: './update-groupe.component.html',
  styleUrls: ['./update-groupe.component.css']
})
export class UpdateGroupeComponent implements OnInit {

  id!: number;
  userName!:string;
  password!:string;
  groupe:Groupe=new Groupe();
  formations: Formation[] = [];

constructor(private groupeService:GroupeService, 
  private route:ActivatedRoute, private router:Router,
  private formationService:FormationService) { }

ngOnInit(): void {
this.getFormations();
  this.id=this.route.snapshot.params['id'];
  this.groupeService.getGroupeById(this.id).subscribe(data => {
    this.groupe=data;
  },error =>console.log(error)
  );

}

private getFormations(){
  this.formationService.getFormationList().subscribe(data => {
    this.formations=data;
    console.log('formation=>'+JSON.stringify(this.formations));
  });
}
goToGroupeList(){
  this.router.navigate(['/groupes']);
}
onSubmit(){
  this.groupeService.updateGroupe(this.id,this.groupe).subscribe(data =>{
  this.goToGroupeList();
  },error =>console.log(error)
  
  );
}

}
