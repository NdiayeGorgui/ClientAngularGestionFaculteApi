import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { Role } from 'src/app/Role/role';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userFormgroup!:FormGroup;
  submitted:boolean=false;
  roleId!: number;
 // id!: number;
  user:User=new User();
  roles: Role[] = [];
  role!:Role;
  userName!:string;
  userId!:number;
constructor(private authService:AuthService, 
  private route:ActivatedRoute, private router:Router,private fb:FormBuilder) { }

ngOnInit(): void {
this.getRoles();
  this.userId=this.route.snapshot.params['id'];
  this.authService.getUserById(this.userId).subscribe(data => {

    this.userFormgroup=this.fb.group({
     
      uName:[data.userName,Validators.required],
      uPass:[data.password,Validators.required],
      
    });
    this.user=data;
  },error =>console.log(error)
  );

}

private getRoles(){
  this.authService.getRolesList().subscribe(data => {
    this.roles=data;
    console.log('roles=>'+JSON.stringify(this.roles));
  });
}
goToUserList(){
  this.router.navigate(['/users']);
}
onSubmit(){
  this.submitted=true;
  if(this.userFormgroup.invalid) return;
  this.authService.updateUser(this.userId,this.user).subscribe(data =>{
    alert("Modification effectuée avec succés !");
  this.goToUserList();
  },error =>console.log(error)
  
  );
}

}
