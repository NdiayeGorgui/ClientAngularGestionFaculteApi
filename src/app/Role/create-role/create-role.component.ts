import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from 'src/app/User/user';
import { ComponentValidatorService } from 'src/app/Validator/component-validator.service';
import { Role } from '../role';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  roleFormgroup!:FormGroup;
  submitted:boolean=false;
  users: User[] = [];
  userId!: number;
  userName!:string;
  user!:User;
  role:Role=new Role();
  constructor(private userService:AuthService,
              private roleService:AuthService,
              private componentvalidatorService:ComponentValidatorService,
              private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.roleFormgroup=this.fb.group({
      rName:["",[Validators.required],this.componentvalidatorService.validateUniqueRoleName.bind(this.componentvalidatorService)]
     
    });
    this.getUsers();
   
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.users=data;
      console.log('users=>'+JSON.stringify(this.users));
    });
  }
  saveRole(){
    this.submitted=true;
    if(this.roleFormgroup.invalid) return;
    this.roleService.createRole(this.role).subscribe(data => {
      alert("Ajout effectué avec succés !");
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
