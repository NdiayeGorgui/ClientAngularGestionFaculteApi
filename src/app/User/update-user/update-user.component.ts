import { Component, OnInit } from '@angular/core';
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
  roleId!: number;
  id!: string;
  user:User=new User();
  roles: Role[] = [];
  role!:Role;
constructor(private authService:AuthService, 
  private route:ActivatedRoute, private router:Router) { }

ngOnInit(): void {
this.getRoles();
  this.id=this.route.snapshot.params['id'];
  this.authService.getUserById(this.id).subscribe(data => {
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
  this.authService.updateUser(this.id,this.user).subscribe(data =>{
  this.goToUserList();
  },error =>console.log(error)
  
  );
}

}
