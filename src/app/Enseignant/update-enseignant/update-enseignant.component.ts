import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { Istatus } from '../enseignant-status-interface';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {
  enseignantFormgroup!:FormGroup;
  submitted:boolean=false;
  public statues:Array<Istatus>=[{id:1,name:'Permanent'},
  {id:2,name:'Contractuel'},
  {id:3,name:'Vacataire'}];

  public statId!:number;
id!: number;
enseignant:Enseignant=new Enseignant();

constructor(private enseignantService:EnseignantService, 
  private route:ActivatedRoute, private router:Router,private fb:FormBuilder) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.enseignantService.getEnseignantById(this.id).subscribe(data => {

    this.enseignantFormgroup = this.fb.group({
    
      eAddress:[data.adress],
      eFirstName:[data.firstName,[Validators.required, Validators.minLength(2)]],
      eLastName:[data.lastName,[Validators.required, Validators.minLength(2)]],
      eMail:[data.mail,[Validators.required, Validators.email]],
      eStatut:[data.statut,Validators.required],
      eTelephone:[data.telephone,Validators.required],
      
    });
    this.enseignant=data;
  },error =>console.log(error)
  );

}
goToEnseignantList(){
  this.router.navigate(['/enseignants']);
}
onSubmit(){
  this.submitted=true;
  if(this.enseignantFormgroup.invalid) return;
  this.enseignantService.updateEnseignant(this.id,this.enseignant).subscribe(data =>{
    alert("Modification effectuée avec succés !");
  this.goToEnseignantList();
  },error =>console.log(error)
  
  );
}
   

}
