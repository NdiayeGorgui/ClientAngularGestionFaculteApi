import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { Istatus } from '../enseignant-status-interface';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent implements OnInit {

  enseignant:Enseignant=new Enseignant();
  
  public statues:Array<Istatus>=[{id:1,name:'Permanent'},
  {id:2,name:'Contractuel'},
  {id:3,name:'Vacataire'}];

  public statId!:number;

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
public onChange(){
  this.statId;
  console.log(this.statId);
}



}
