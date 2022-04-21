import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Role } from '../role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  id!:number;
  nom!:string;
  roleName!:string;
  page:number=1;
  totalRecords!:number;
  roles: Role[] = [];
  constructor(private roleService:AuthService,
    private router:Router,
    public authService:AuthService) { }

  ngOnInit(): void {
   this.getRoles();
  }
private getRoles(){
  this.roleService.getRolesList().subscribe(data => {
    this.roles=data;
    this.totalRecords=this.roles.length;
  });
}
handlePageChange(event: number) {
  this.page = event;
}

updateRole(id:number){
  this.router.navigate(['update-role',id]);

}

deleteRole(roleId:number){
  let conf=confirm("Etes-vous sure ?")
  if(conf){
  this.roleService.deleteRole(roleId).subscribe(data => {
    console.log(data);
    this.getRoles();
  });
}
}

roleDetails(roleName:string){
  this.router.navigate(['role-details',roleName]);
}
searchTitle(){
  if(this.nom!=""){
    this.roles=this.roles.filter(res=>{
      return res.roleName.toLowerCase().match(this.nom.toLowerCase());
    });
  }else if(this.nom==""){
    this.ngOnInit();
  }

}
createRole(){
    this.router.navigate(['/create-role']);
  }

}
