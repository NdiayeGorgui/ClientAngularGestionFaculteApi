import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Role } from '../role';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  roleName!: string;
  role!: Role;
constructor(private route:ActivatedRoute, private roleService:AuthService, private router:Router) { }

ngOnInit(): void {
  this.roleName=this.route.snapshot.params['id'];
  this.role=new Role();
  this.roleService.getRoleByRoleName(this.roleName).subscribe(data =>{
    this.role=data;
  });

}

private getRoles(){
  
 
}

goToRoleList(){
  this.router.navigate(['/roles']);
}

}
