import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
import { BranchManagerService } from '../services/branch-manager.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {  
  roleType: any;
  userIdPattern:any="^[0-9]$";
  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  pwdPattern="^[A-Za-z0-9]{4,15}$";
  constructor(private adminService:AdminServiceService,private branchManagerService:BranchManagerService,private staffService:StaffService,private route:Router) { }
  ngDoCheck(): void {
    this.roleType=this.selectedType
  }
  error:any;
  errormsg:any;
  ngOnInit(): void {
  }
   addUserForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password:new FormControl("",[Validators.required]),
      role:new FormControl("",Validators.pattern(this.userIdPattern))
    })
    selectedType = 'opentype';

    onChange(event:any) {
      console.log( event.target.value);
      
      this.selectedType = event.target.value;
    }
    get role(){
      return this.addUserForm.get("role");
    }
    get name(){
      return this.addUserForm.get("name");
    }

    get email(){
      return this.addUserForm.get("email");
    }

    get password(){
      return this.addUserForm.get("password");
    }

    roleId:any;
    addUser(){
      if(this.roleType=='BranchManager'){
       this.branchManagerService.addBranchManager(this.addUserForm.value).subscribe((data)=>{
        console.log(data);
        alert("BranchManager Added");
        this.route.navigate(['/login']);
       })
      }
      else if(this.roleType=='Staff'){
        this.staffService.addStaff(this.addUserForm.value).subscribe((data)=>{
          console.log(data);
          alert("Staff Added");
          this.route.navigate(['/login']);
        })
      }
      else{
        console.log(this.addUserForm.value);
        
        this.adminService.addAdmin(this.addUserForm.value).subscribe((data)=>{
          console.log(data);
          alert("Admin Added");
          this.route.navigate(['/login']);
        })
      }
    }
   
}
