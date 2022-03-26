import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-groupe-details',
  templateUrl: './groupe-details.component.html',
  styleUrls: ['./groupe-details.component.css']
})
export class GroupeDetailsComponent implements OnInit {

  id!: number;
  groupe!: Groupe;
constructor(private route:ActivatedRoute, private groupeService:GroupeService) { }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.groupe=new Groupe();
  this.groupeService.getGroupeById(this.id).subscribe(data =>{
    this.groupe=data;
  });

}
}
