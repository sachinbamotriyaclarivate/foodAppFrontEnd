import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient,private user:UserService) { }

  addStaff(staff:any){
    return this.http.post(`http://localhost:8080/staff/${staff.role}`,staff);
   }
   login(user:any){
    return this.http.post("http://localhost:8080/staffLogin",user);
   }
   getAllStaffs(){
    return this.http.get("http://localhost:8080/staff");
   }

   isAcess(){
    if(this.user.isLoggedIn() && this.user.getRole()=='Admin' || this.user.getRole()=='BranchManager'){
      return true;
    }
    else{
      return false;
    }
   }

   updateStaff(staff:any,staffId:any){
    alert(staffId);
    return this.http.put("http://localhost:8080/staff/"+staffId,staff);
   }

   findByEmail(staff:any){
    return this.http.get("http://localhost:8080/staffEmail",staff);
   }
}
