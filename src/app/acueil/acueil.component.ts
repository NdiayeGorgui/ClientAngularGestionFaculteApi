import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Login/auth.service';

@Component({
  selector: 'app-acueil',
  templateUrl: './acueil.component.html',
  styleUrls: ['./acueil.component.css']
})
export class AcueilComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
    if(!this.authService.isTokenExpired())
    this.authService.isloggedIn = true;
  }

}
