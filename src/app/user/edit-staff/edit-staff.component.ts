import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern="^[A-Za-z0-9]{4,15}$";
  selectedStaff:any
  error:any;
  errormsg:any
  constructor(private route:ActivatedRoute,private staff:StaffService,private router:Router) { }
  result:any;

  ngOnInit(): void {
    let staffId = this.route.snapshot.params['staffId'];
    this.staff.getAllStaffs().subscribe((data)=>{
      this.result =data;
      for(let staff of this.result.t){
        if(staff.staffId==staffId){
          this.selectedStaff = staff;
          console.log(this.selectedStaff);
        }
      }
    })
  }

  editStaffForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password:new FormControl("",[Validators.required,Validators.pattern(this.pwdPattern)]),
    })
  


  get name() {
    return this.editStaffForm.get("name");
  }
  get email() {
    return this.editStaffForm.get("email");
  }
  get password() {
    return this.editStaffForm.get("password");
  }


  editStaff(){
    this.staff.updateStaff(this.editStaffForm.value,this.selectedStaff.staffId).subscribe((res)=>{
      console.log(this.selectedStaff.staffId);
      this.router.navigate(['/staff-details']);
    }
    ,(err)=>{
      this.error=err;
      this.errormsg=err.message;
      console.error(err.message);
    });
  }


}
