import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent implements OnInit {

  enseignant:Enseignant=new Enseignant();

  constructor(private enseignantService:EnseignantService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveEnseignant(){
    this.enseignantService.createEnseignant(this.enseignant).subscribe(data => {
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

}
