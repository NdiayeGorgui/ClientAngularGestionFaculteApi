import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-update-type-cours',
  templateUrl: './update-type-cours.component.html',
  styleUrls: ['./update-type-cours.component.css']
})
export class UpdateTypeCoursComponent implements OnInit {
  typeCoursFormgroup!:FormGroup;
  submitted:boolean=false;
  id!: number;
  typeCours:TypeCours=new TypeCours();

constructor(private typeCoursService:TypeCoursService, 
  private route:ActivatedRoute, private router:Router,private fb:FormBuilder) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.typeCoursService.getTypeCoursById(this.id).subscribe(data => {

    this.typeCoursFormgroup = this.fb.group({
    
      tType:[data.type,Validators.required],
      tPrix:[data.prix,Validators.required]
      
      

    });
    this.typeCours=data;
  },error =>console.log(error)
  );

}
goToTypeCoursList(){
  this.router.navigate(['/type-cours']);
}
onSubmit(){
  this.submitted=true;
  if(this.typeCoursFormgroup.invalid) return;
  this.typeCoursService.updateTypeCours(this.id,this.typeCours).subscribe(data =>{
    alert("Modification effectuée avec succés !");
  this.goToTypeCoursList();
  },error =>console.log(error)
  
  );
}

}
