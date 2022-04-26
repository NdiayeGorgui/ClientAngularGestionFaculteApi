import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  formationFormgroup!:FormGroup;
  submitted:boolean=false;
  id!: number;
formation:Formation=new Formation();

constructor(private formationService:FormationService, 
  private route:ActivatedRoute, private router:Router,private fb:FormBuilder) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.formationService.getFormationById(this.id).subscribe(data => {

    this.formationFormgroup = this.fb.group({
    
      nFormation: [data.nomFormation, Validators.required],
      nDuree:[data.duree,Validators.required],
      nAnnee:[data.annee,Validators.required]

    });
    this.formation=data;
  },error =>console.log(error)
  );

}
goToFormationList(){
  this.router.navigate(['/formations']);
}
onSubmit(){
  this.submitted=true;
    if(this.formationFormgroup.invalid) return;
  this.formationService.updateFormation(this.id,this.formation).subscribe(data =>{
    alert("Modification effectuée avec succés !");
  this.goToFormationList();
  },error =>console.log(error)
  
  );
}

}
