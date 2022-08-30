import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from '../services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate {
  constructor(private menu:MenuService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.menu.isMenu()){
        return true;
      }
      else{
        window.alert("Only For Admin and Manager")    
        return false;
      }
  }
  
}
