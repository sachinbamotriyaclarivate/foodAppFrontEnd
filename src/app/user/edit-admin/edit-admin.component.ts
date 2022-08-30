import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  unamePattern :any= "^[a-zA-Z]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern="^[A-Za-z0-9]{4,15}$";
  selectedAdmin:any
  error:any;
  errormsg:any
  constructor(private route:ActivatedRoute,private adminService:AdminServiceService,private router:Router) { }
  result:any;

  ngOnInit(): void {
    let adminId = this.route.snapshot.params['adminId'];
    this.adminService.getAllAdmin().subscribe((data)=>{
      this.result =data;
      for(let admin of this.result.t){
        if(admin.adminId==adminId){
          this.selectedAdmin = admin;
          console.log(this.selectedAdmin);
        }
      }
    })
  }

  editAdminForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password:new FormControl("",[Validators.required]),
    })
  
  get name() {
    return this.editAdminForm.get("name");
  }
  get email() {
    return this.editAdminForm.get("email");
  }
  get password() {
    return this.editAdminForm.get("password");
  }

  editAdmin(){
    this.adminService.updateAdmin(this.editAdminForm.value,this.selectedAdmin.adminId).subscribe((res)=>{
      console.log(this.selectedAdmin.adminId);
      alert("Admin Updated ")
      this.router.navigateByUrl('/admin-details');
    }
    ,(err)=>{
      this.error=err;
      this.errormsg=err.message;
      console.error(err.message);
    });
    
  
  }


}
