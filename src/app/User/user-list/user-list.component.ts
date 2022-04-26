import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Login/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userId!:number;
  nom!:string;
  userName!:string;
  page:number=1;
  totalRecords!:number;
  users: User[] = [];
  constructor(private userService:AuthService,
    private router:Router,
    public authService:AuthService) { }

  ngOnInit(): void {
   this.getUsers();
  }
private getUsers(){
  this.userService.getUserList().subscribe(data => {
    this.users=data;
    this.totalRecords=this.users.length;
  });
}
handlePageChange(event: number) {
  this.page = event;
}

updateUser(id:number){
  this.router.navigate(['update-user',id]);

}

deleteUser(userId:number){
  let conf=confirm("Etes-vous sure ?")
  if(conf){
  this.userService.deleteUser(userId).subscribe(data => {
    alert("Suppression effectuée avec succés !");
    console.log(data);
    this.getUsers();
  });
}
}

userDetails(userName:string){
  this.router.navigate(['user-details',userName]);
}
searchTitle(){
  if(this.nom!=""){
    this.users=this.users.filter(res=>{
      return res.userName.toLowerCase().match(this.nom.toLowerCase());
    });
  }else if(this.nom==""){
    this.ngOnInit();
  }

}
createUser(){
    this.router.navigate(['/create-user']);
  }

}
