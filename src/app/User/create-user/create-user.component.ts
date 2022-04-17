import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Role } from 'src/app/Role/role';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  roles: Role[] = [];
  roleId!: number;
  role!:Role;
  user:User=new User();
  constructor(private userService:AuthService,
              private roleService:AuthService,
              private router:Router) { }

  ngOnInit(): void { 
    this.getRoles();
   
  }

  private getRoles(){
    this.roleService.getRolesList().subscribe(data => {
      this.roles=data;
      console.log('roles=>'+JSON.stringify(this.roles));
    });
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUserList();
    },
    error =>console.log(error))
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
  onSubmit(){
    console.log(this.user);
  
    this.saveUser();
    
  }

}
