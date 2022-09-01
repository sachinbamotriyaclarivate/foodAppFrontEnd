import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerService {
 

  constructor(private https:HttpClient,private user:UserService) { }

  getAllBranchManagers(){
   return this.https.get("http://localhost:8080/branchmanager");
  }

  addBranchManager(branchManager:any){
    return this.https.post(`http://localhost:8080/branchmanager/${branchManager.role}`,branchManager);
   }

  login(user:any){
    return this.https.post("http://localhost:8080/branchManagerLogin",user);
   }   

   updateBranchManager(branchManager:any,branchManagerId:any){
    console.log(branchManagerId);
    
    return this.https.put("http://localhost:8080/branchmanager/"+branchManagerId,branchManager);
   }

   isBranchManager(){
    if(this.user.isLoggedIn() && this.user.getRole()=='BranchManager'){
      return true;
    }
    else{
      return false;
    }
   }

}



