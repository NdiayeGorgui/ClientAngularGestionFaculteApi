import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-update-groupe',
  templateUrl: './update-groupe.component.html',
  styleUrls: ['./update-groupe.component.css']
})
export class UpdateGroupeComponent implements OnInit {

  id!: number;
  groupe:Groupe=new Groupe();

constructor(private groupeService:GroupeService, 
  private route:ActivatedRoute, private router:Router) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.groupeService.getGroupeById(this.id).subscribe(data => {
    this.groupe=data;
  },error =>console.log(error)
  );

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
