import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {

  id!: number;
  cours!: Cours;
constructor(private route:ActivatedRoute, private coursService:CoursService) { }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  //this.cours=new Cours();
 
  this.coursService.getCoursById(this.id).subscribe(data =>{
    this.cours=data;
  });
}

}
