import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from '../cours';
import { CoursService } from '../cours.service';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.css']
})
export class UpdateCoursComponent implements OnInit {

  id!: number;
  cours:Cours=new Cours();
 // cours!:Cours
constructor(private coursService:CoursService, 
  private route:ActivatedRoute, private router:Router) { }

ngOnInit(): void {

  this.id=this.route.snapshot.params['id'];
  this.coursService.getCoursById(this.id).subscribe(data => {
    this.cours=data;
  },error =>console.log(error)
  );

}
goToCoursList(){
  this.router.navigate(['/cours']);
}
onSubmit(){
  this.coursService.updateCours(this.id,this.cours).subscribe(data =>{
  this.goToCoursList();
  },error =>console.log(error)
  
  );
}

}
