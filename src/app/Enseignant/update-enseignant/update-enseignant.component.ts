import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {

 
id!: number;
enseignant:Enseignant=new Enseignant();

constructor(private enseignantService:EnseignantService, 
  private route:ActivatedRoute, private router:Router) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.enseignantService.getEnseignantById(this.id).subscribe(data => {
    this.enseignant=data;
  },error =>console.log(error)
  );

}
goToEnseignantList(){
  this.router.navigate(['/enseignants']);
}
onSubmit(){
  this.enseignantService.updateEnseignant(this.id,this.enseignant).subscribe(data =>{
  this.goToEnseignantList();
  },error =>console.log(error)
  
  );
}
   

}
