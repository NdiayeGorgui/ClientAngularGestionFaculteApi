import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from 'src/app/User/user';
import { Role } from '../role';

@Component({
  selector: 'app-add-role-to-user',
  templateUrl: './add-role-to-user.component.html',
  styleUrls: ['./add-role-to-user.component.css']
})
export class AddRoleToUserComponent implements OnInit {

  
  userName!:string;
  roleName!:string;
 

  roles: Role[] = [];
  users: User[] = [];
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.getRoles();
    this.getUsers();
  }

  onSubmit(){
   
    this.authService.addRoleToUser(this.userName,this.roleName).subscribe(data => {
      console.log(data);
      alert("User ajouté avec succés !");
    });
    
    
  }

  onRemove(){
    let conf=confirm("Etes-vous sure ?")
    if(conf){
    this.authService.deleteRoleToUser(this.userName,this.roleName).subscribe(data => {
      console.log(data);
      
    });
  }
    
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
public onChangeRole(){
  //this.statId;
 // console.log(this.statId);
}

private getRoles(){
  this.authService.getRolesList().subscribe(data => {
    this.roles=data;
  });
}
private getUsers(){
  this.authService.getUserList().subscribe(data => {
    this.users=data;
  
  });
}

public onChangeUser(){
//this.statId;
//console.log(this.statId);
}


reset(){

}

}
