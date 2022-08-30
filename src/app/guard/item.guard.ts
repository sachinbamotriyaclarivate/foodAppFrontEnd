import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemGuard implements CanActivate {
  constructor(private item:ItemService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.item.isItem()){
        return true;
      }
      else{
        window.alert("Only For Admin and Manager")    
        return false;
      }
  }
  
}
