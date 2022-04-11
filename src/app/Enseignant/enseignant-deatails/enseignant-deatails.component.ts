import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-enseignant-deatails',
  templateUrl: './enseignant-deatails.component.html',
  styleUrls: ['./enseignant-deatails.component.css']
})
export class EnseignantDeatailsComponent implements OnInit {

  id!: number;
  enseignant!: Enseignant;
constructor(private route:ActivatedRoute, private enseignantService:EnseignantService, private router:Router) { }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.enseignant=new Enseignant();
  this.enseignantService.getEnseignantById(this.id).subscribe(data =>{
    this.enseignant=data;
  });
}

goToEnseignantList(){
  this.router.navigate(['/enseignants']);
}

}
