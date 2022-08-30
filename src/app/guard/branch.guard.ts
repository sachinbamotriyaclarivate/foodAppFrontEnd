import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BranchService } from '../services/branch.service';

@Injectable({
  providedIn: 'root'
})
export class BranchGuard implements CanActivate {
  constructor(private branch:BranchService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(this.branch.isBranch()){
        return true;
      }
      else{
        window.alert("Only For Admin")    
        return false;
      }
  }
  
}
