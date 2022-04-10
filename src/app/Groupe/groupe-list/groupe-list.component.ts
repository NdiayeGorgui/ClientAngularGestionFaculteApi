import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.css']
})
export class GroupeListComponent implements OnInit {

  
  nom!:string;
  page:number=1;
  totalRecords!:number;
  groupes: Groupe[] = [];
  constructor(private groupeService:GroupeService,
    private router:Router,
    public authService:AuthService) { }

  ngOnInit(): void {
   this.getGroupes();
  }
private getGroupes(){
  this.groupeService.getGroupeList().subscribe(data => {
    this.groupes=data;
    this.totalRecords=this.groupes.length;
  });
}
handlePageChange(event: number) {
  this.page = event;
}

updateGroupe(id:number){
  this.router.navigate(['update-groupe',id]);

}

deleteGroupe(id:number){
  let conf=confirm("Etes-vous sure ?")
  if(conf){
  this.groupeService.deleteGroupe(id).subscribe(data => {
    console.log(data);
    this.getGroupes();
  });
}
}

groupeDetails(id:number){
  this.router.navigate(['groupe-details',id]);
}
searchTitle(){
  if(this.nom!=""){
    this.groupes=this.groupes.filter(res=>{
      return res.numeroGroupe.toLowerCase().match(this.nom.toLowerCase());
    });
  }else if(this.nom==""){
    this.ngOnInit();
  }

}
createGroupe(){
    this.router.navigate(['/create-groupe']);
  }


}
