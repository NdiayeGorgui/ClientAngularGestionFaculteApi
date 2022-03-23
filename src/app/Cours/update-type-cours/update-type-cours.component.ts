import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-update-type-cours',
  templateUrl: './update-type-cours.component.html',
  styleUrls: ['./update-type-cours.component.css']
})
export class UpdateTypeCoursComponent implements OnInit {

  id!: number;
  typeCours:TypeCours=new TypeCours();

constructor(private typeCoursService:TypeCoursService, 
  private route:ActivatedRoute, private router:Router) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.typeCoursService.getTypeCoursById(this.id).subscribe(data => {
    this.typeCours=data;
  },error =>console.log(error)
  );

}
goToTypeCoursList(){
  this.router.navigate(['/type-cours']);
}
onSubmit(){
  this.typeCoursService.updateTypeCours(this.id,this.typeCours).subscribe(data =>{
  this.goToTypeCoursList();
  },error =>console.log(error)
  
  );
}

}
