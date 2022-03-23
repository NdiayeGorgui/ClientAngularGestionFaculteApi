import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeCours } from '../type-cours';
import { TypeCoursService } from '../type-cours.service';

@Component({
  selector: 'app-type-cours-details',
  templateUrl: './type-cours-details.component.html',
  styleUrls: ['./type-cours-details.component.css']
})
export class TypeCoursDetailsComponent implements OnInit {

  id!: number;
  typeCours!: TypeCours;
constructor(private route:ActivatedRoute, private typeCoursService:TypeCoursService) { }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.typeCours=new TypeCours();
  this.typeCoursService.getTypeCoursById(this.id).subscribe(data =>{
    this.typeCours=data;
  });
}

}
