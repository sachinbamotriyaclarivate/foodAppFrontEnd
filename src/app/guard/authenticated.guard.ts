import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticatedGuard implements CanActivate {
  constructor(private user:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{ 
      if(this.user.isLoggedIn()==true)
        return true;
      else{
        window.alert("Please Login First")
        this.router.navigate(['/login']);
        return false;
      }
  }
}
