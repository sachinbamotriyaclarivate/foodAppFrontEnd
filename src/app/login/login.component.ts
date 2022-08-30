import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';
import { BranchManagerService } from '../services/branch-manager.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedValue:any;
  userType = 'Admin';

  constructor(private adminService:AdminServiceService,
    private branchManagerService:BranchManagerService,
    private staffService:StaffService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  login = new FormGroup(
    {
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required]),     
    })
    get email(){
      return this.login.get("email");
    }
    get password(){
      return this.login.get("password");
    }

    ngDoCheck(): void {
      this.userType=this.userType
    }
    onChange(event:any) {
      this.userType = event.target.value;
    }
    id:any;
    result:any;

    loginUser(){
      if(this.userType=='Staff'){
        this.staffService.login(this.login.value).subscribe((data)=>{
          this.result=data;
          this.id=this.result.t.staffId;
          localStorage.setItem("userType","Staff");
          localStorage.setItem("isLoggedIn","true");
          localStorage.setItem("id",this.id);
          console.log(this.result);
          alert("Logged in as Staff")
          this.route.navigate(['/home']);
        },
        error => {
          alert("Please Enter Valid Credentials");
          console.log(error);
        })
        
      }
    else if(this.userType=='BranchManager'){
      this.branchManagerService.login(this.login.value).subscribe((data)=>{
        this.result=data;
        this.id=this.result.t.branchManagerId;
        localStorage.setItem("userType","BranchManager");
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("id",this.id);
        console.log(this.result);
        alert("Logged in as Manager")
        this.route.navigate(['/home']);
      },
      error => {
        alert("Please Enter Valid Credentials");
        console.log(error);
      })
      
    }
    else {
      console.log(this.login.value);
      this.adminService.login(this.login.value).subscribe((data)=>{
        this.result=data;
        this.id=this.result.t.adminId;
        localStorage.setItem("userType","Admin");
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("id",this.id);
        console.log(this.result);
        alert("Logged in as Admin")
        this.route.navigate(['/home']);
      },
      error => {
        alert("Please Enter Valid Credentials");
        console.log(error);
      })
    }


  }

}