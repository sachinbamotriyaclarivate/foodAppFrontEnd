import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  branchManagerId!:any;

  constructor(private https:HttpClient,private user:UserService) { }
  addMenu(menu:any){
    this.branchManagerId = localStorage.getItem("id");
    return this.https.post("http://localhost:8080/menu/"+this.branchManagerId,menu);
   }

   getAllMenu(){
    return this.https.get("http://localhost:8080/menu");
   }

   isMenu(){
    if(this.user.isLoggedIn() && this.user.getRole()=='Admin' || this.user.getRole()=='BranchManager'){
      return true;
    }
    
    else{
      return false;
    }
   }
}
