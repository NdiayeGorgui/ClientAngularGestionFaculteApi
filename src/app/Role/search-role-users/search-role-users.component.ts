import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from 'src/app/User/user';
import { Role } from '../role';


@Component({
  selector: 'app-search-role-users',
  templateUrl: './search-role-users.component.html',
  styleUrls: ['./search-role-users.component.css']
})
export class SearchRoleUsersComponent implements OnInit {

  id!:number;
  roleId:any=0;
  userName!:string;
  roleName!:string;
  roles: any;
  users: User[] = [];
  role!:Role;
  page:number=1;
  totalRecords!:number;
  
  constructor(private authService:AuthService) { }

   

  ngOnInit(): void {
    this.getRoles();
   // this.reset();
  }

  private getRoles(){
    this.authService.getRolesList().subscribe(data => {
      this.roles=data;
    });
  }

  handlePageChange(event: number) {
    this.page = event;
  }

  roleChange(rId: number) {
    this.onSearch(rId);
  }
  
  onSearch(dataForm:any){
   
    console.log(dataForm);
    this.authService.searchUserbyRolesId(this.roleId).subscribe(data => {
      this.users=data;
      this.totalRecords=this.users.length;
      console.log(data);
      console.log(this.totalRecords);
    });
  }

  reset() {
    this.roleId = 0;
  }

  retirer(data:string) {
    
  }

}
