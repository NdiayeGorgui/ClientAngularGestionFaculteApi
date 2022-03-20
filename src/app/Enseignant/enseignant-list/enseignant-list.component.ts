import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {

  enseignants: Enseignant[] = [];
  constructor(private enseignantService:EnseignantService,
    private router:Router) { }

  ngOnInit(): void {
   this.getEnseignants();
  }
private getEnseignants(){
  this.enseignantService.getEnseignantList().subscribe(data => {
    this.enseignants=data;
  });
}

updateEnseignant(id:number){
  this.router.navigate(['update-enseignant',id]);

}

deleteEnseignant(id:number){
  this.enseignantService.deleteEnseignant(id).subscribe(data => {
    console.log(data);
    this.getEnseignants();
  });
}

enseignantDetails(id:number){
  this.router.navigate(['enseignant-details',id]);
}

}
