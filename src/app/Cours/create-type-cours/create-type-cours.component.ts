import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-create-type-cours',
  templateUrl: './create-type-cours.component.html',
  styleUrls: ['./create-type-cours.component.css']
})
export class CreateTypeCoursComponent implements OnInit {

  typeCours:TypeCours=new TypeCours();
  constructor(private typeCoursService:TypeCoursService,
    private router:Router) { }

  ngOnInit(): void { 
  }

  saveTypeCours(){
    this.typeCoursService.createTypeCours(this.typeCours).subscribe(data => {
      console.log(data);
      this.goToTypeCoursList();
    },
    error =>console.log(error))
  }
  goToTypeCoursList(){
    this.router.navigate(['/type-cours']);
  }
  onSubmit(){
    console.log(this.typeCours);
  
    this.saveTypeCours();
    
  }

}
