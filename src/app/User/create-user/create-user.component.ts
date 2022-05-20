import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Role } from 'src/app/Role/role';
import { ComponentValidatorService } from 'src/app/Validator/component-validator.service';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userFormgroup!:FormGroup;
  submitted:boolean=false;
  roles: Role[] = [];
  roleId!: number;
  roleName!:string;
  role!:Role;
  user:User=new User();
  constructor(private userService:AuthService,
              private roleService:AuthService,
              private componentvalidatorService:ComponentValidatorService,
              private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.userFormgroup=this.fb.group({
      uName:["",[Validators.required],this.componentvalidatorService.validateUniqueUserName.bind(this.componentvalidatorService)],
      upassword:["",Validators.required],
      rName:["",Validators.required]
    });
    this.getRoles();
   
  }

  private getRoles(){
    this.roleService.getRolesList().subscribe(data => {
      this.roles=data;
      console.log('roles=>'+JSON.stringify(this.roles));
    });
  }
  saveUser(){
    this.submitted=true;
    if(this.userFormgroup.invalid) return;
    this.userService.saveUserWihtRole(this.user,this.roleName).subscribe(data => {
      alert("Ajout effectué avec succés !");
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
