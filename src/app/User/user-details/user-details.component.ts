import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!: string;
  user!: User;
constructor(private route:ActivatedRoute, private userService:AuthService, private router:Router) { }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.user=new User();
  this.userService.getUserByUserName(this.id).subscribe(data =>{
    this.user=data;
  });

}

private getRoles(){
  
 
}

goToUserList(){
  this.router.navigate(['/users']);
}

}
