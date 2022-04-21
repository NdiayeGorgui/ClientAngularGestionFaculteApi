import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from 'src/app/User/user';
import { Role } from '../role';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  users: User[] = [];
  userId!: number;
  userName!:string;
  user!:User;
  role:Role=new Role();
  constructor(private userService:AuthService,
              private roleService:AuthService,
              private router:Router) { }

  ngOnInit(): void { 
    this.getUsers();
   
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.users=data;
      console.log('users=>'+JSON.stringify(this.users));
    });
  }
  saveRole(){
    this.roleService.createRole(this.role).subscribe(data => {
      console.log(data);
      this.goToRoleList();
    },
    error =>console.log(error))
  }
  goToRoleList(){
    this.router.navigate(['/roles']);
  }
  onSubmit(){
    console.log(this.role);
  
    this.saveRole();
    
  }

}
