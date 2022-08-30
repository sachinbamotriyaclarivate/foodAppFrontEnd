import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffService } from '../services/staff.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
  constructor(private staff:StaffService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(this.staff.isAcess()){
        return true;
      }
      else{
        window.alert("Only For Admin and Branch Manager")    
        return false;
      }
  }
  
}
