import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private https:HttpClient,private user:UserService) { }

 getAllBranches(){
  return this.https.get("http://localhost:8080/branch");
 }
 adminId:any;

 addBranch(branch:any){
  this.adminId = localStorage.getItem("id");
  return this.https.post("http://localhost:8080/branch/"+this.adminId,branch);
 }
 
 updateBranch(branch:any,branchId:any){
  return this.https.put("http://localhost:8080/branch/"+branchId,branch);
 }

 isBranch(){
  if(this.user.isLoggedIn() && this.user.getRole()=='Admin'){
    return true;
  }
  else {
    return false;
  }
 }
}