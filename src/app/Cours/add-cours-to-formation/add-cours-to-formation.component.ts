import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-add-cours-to-formation',
  templateUrl: './add-cours-to-formation.component.html',
  styleUrls: ['./add-cours-to-formation.component.css']
})
export class AddCoursToFormationComponent implements OnInit {


  libelle!:string;
  nomFormation!:string;
  cours!:Cours;

  formations: Formation[] = [];
  courss: Cours[] = [];
  constructor(private coursService:CoursService,
    private router:Router,private formationService:FormationService) { }

  ngOnInit(): void {
    this.getCours();
    this.getFormations();
  }

  onSubmit(){
   
    this.coursService.addCoursToFormation(this.libelle,this.nomFormation).subscribe(data => {
      console.log(data);
      alert("Cours ajouté  à la formation avec succés !");
    });
    
  }
  onRemove(){
    let conf=confirm("Etes-vous sure ?")
  if(conf){
    this.coursService.deleteCoursToFormation(this.libelle,this.nomFormation).subscribe(data => {
      console.log(data);
   
    });
  }
    
  }

  goToCoursList(){
    this.router.navigate(['/cours']);
  }
public onChangeCours(){
  //this.statId;
 // console.log(this.statId);
}

private getFormations(){
  this.formationService.getFormationList().subscribe(data => {
    this.formations=data;
  });
}
private getCours(){
  this.coursService.getCoursList().subscribe(data => {
    this.courss=data;
  
  });
}

public onChangeFormation(){
//this.statId;
//console.log(this.statId);
}


reset(){

}

}
