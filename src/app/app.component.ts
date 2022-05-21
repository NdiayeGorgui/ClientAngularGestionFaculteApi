import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '';
  constructor(public authService:AuthService, private router:Router) { }

  
ngOnInit() {
 
//Afficher la page login seulement lorsque l’utilisateur n’est pas connecté
  this.authService.loadToken();
if (this.authService.getToken()==null || this.authService.isTokenExpired())
this.router.navigate(['/login']);
}
  onLogout(){
   this.authService.logout();
  }
}
