import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BranchManagerService } from '../services/branch-manager.service';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerGuard implements CanActivate {
  constructor(private branchManager:BranchManagerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(this.branchManager.isBranchManager()){
        return true;
      }
      else{
        window.alert("Only For Branch Manager")    
        return false;
      }
  }
}
