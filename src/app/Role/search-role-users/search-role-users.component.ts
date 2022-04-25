import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from 'src/app/User/user';
import { Role } from '../role';
import { IsRole } from '../role-interface';

@Component({
  selector: 'app-search-role-users',
  templateUrl: './search-role-users.component.html',
  styleUrls: ['./search-role-users.component.css']
})
export class SearchRoleUsersComponent implements OnInit {

  roleName:string="null";
  users: any;
  //roles: any;
  user!:User;
  role!:Role;
  page:number=1;
  totalRecords!:number;
  public statId!:number;
  constructor(private authService:AuthService,
    private router:Router) { }

    public roles:Array<IsRole>=[{id:1,roleName:'ADMIN'},
  {id:2,roleName:'SUPERADMIN'},
  {id:3,roleName:'RESPONSABLE'},
  {id:4,roleName:'ENSEIGNANT'}];

  ngOnInit(): void {
   // this.reset(this.statut);
  }

  handlePageChange(event: number) {
    this.page = event;
  }

  statusChange(statut: string) {
    this.onSearch(statut);
  }
  
  onSearch(dataForm:any){
   
    /* console.log(dataForm);
    this.enseignantService.searchEnseignantsByStatut(this.statut).subscribe(data => {
      this.enseignants=data;
      this.totalRecords=this.enseignants.length;
      console.log(data);
      console.log(this.totalRecords);
    
    }); */
    
    
  }
  reset(statut:string) {
   // this.statut = "null";
  }

}
