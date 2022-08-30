import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient,private user:UserService) { }

  addAdmin(admin:any){
    return this.http.post("http://localhost:8080/admin",admin);
   }

   login(user:any){
    return this.http.post("http://localhost:8080/adminLogin",user);
   }
   getAllAdmin(){
    return this.http.get("http://localhost:8080/admin");
   }
   isAdmin(){
    if(this.user.isLoggedIn() && this.user.getRole()=='Admin'){
      return true;
    }
    else{
      return false;
    }
   }

   updateAdmin(admin:any,adminId:any){
    return this.http.put("http://localhost:8080/admin/"+adminId,admin);
   }
   findByEmail(admin:any){
    return this.http.get("http://localhost:8080/adminEmail",admin);
   }

}
