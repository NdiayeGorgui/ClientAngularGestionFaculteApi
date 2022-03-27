import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EnseignementGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.authService.isAdmin()){
        return true;
      }else{
        this.router.navigate(['forbidden']);
        return false;
      }
    
  }
  
}
