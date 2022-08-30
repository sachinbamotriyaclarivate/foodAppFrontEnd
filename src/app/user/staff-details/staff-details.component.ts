import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
  staffs:any;
  deleteStaff(staffId:any){}
  constructor(private staff:StaffService,private user:UserService) { }
  branchManagerId=this.user.getId();
  ngOnInit(): void {
    this.staff.getAllStaffs().subscribe((data)=>{
      this.staffs=data;
      console.log(this.staffs.t);
    })
  }


}
