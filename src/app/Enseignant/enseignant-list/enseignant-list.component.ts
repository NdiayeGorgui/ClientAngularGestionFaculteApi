import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {
  nom!:string;
  page:number=1;
  totalRecords!:number;
  enseignants: Enseignant[] = [];
  constructor(private enseignantService:EnseignantService,
              private router:Router,
              public authService:AuthService) { }

  ngOnInit(): void {
   this.getEnseignants();
  }
private getEnseignants(){
  this.enseignantService.getEnseignantList().subscribe(data => {
    this.enseignants=data;
    this.totalRecords=this.enseignants.length;
  });
}
handlePageChange(event: number) {
  this.page = event;
}

updateEnseignant(id:number){
  this.router.navigate(['update-enseignant',id]);

}

deleteEnseignant(id:number){
  let conf=confirm("Etes-vous sure ?")
  if(conf){
    this.enseignantService.deleteEnseignant(id).subscribe(data => {
      alert("Suppression effectuée avec succés !");
      console.log(data);
      this.getEnseignants();
    }, () => {
      alert("Cet Enseignant est lié à un ou plusieurs groupes, veuillez le retirer d'abord !");
    }
  ); 
  }
  
}

enseignantDetails(id:number){
  this.router.navigate(['enseignant-details',id]);
}
searchTitle(){
  if(this.nom!=""){
    this.enseignants=this.enseignants.filter(res=>{
      return res.lastName.toLowerCase().match(this.nom.toLowerCase());
    });
  }else if(this.nom==""){
    this.ngOnInit();
  }

}
createEnseigant(){
    this.router.navigate(['/create-enseignant']);
  }
}
