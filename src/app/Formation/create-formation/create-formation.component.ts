import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {

  formation:Formation=new Formation();
  constructor(private formationService:FormationService,
    private router:Router) { }

  ngOnInit(): void { 
  }

  saveFormation(){
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
