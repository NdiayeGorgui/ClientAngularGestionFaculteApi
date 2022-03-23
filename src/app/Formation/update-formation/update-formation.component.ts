import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id!: number;
formation:Formation=new Formation();

constructor(private formationService:FormationService, 
  private route:ActivatedRoute, private router:Router) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.formationService.getFormationById(this.id).subscribe(data => {
    this.formation=data;
  },error =>console.log(error)
  );

}
goToFormationList(){
  this.router.navigate(['/formations']);
}
onSubmit(){
  this.formationService.updateFormation(this.id,this.formation).subscribe(data =>{
  this.goToFormationList();
  },error =>console.log(error)
  
  );
}

}
