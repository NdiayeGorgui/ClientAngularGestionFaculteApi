import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  id!: number;
  formation!: Formation;
constructor(private route:ActivatedRoute, private formationService:FormationService) { }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.formation=new Formation();
  this.formationService.getFormationById(this.id).subscribe(data =>{
    this.formation=data;
  });
}

}
