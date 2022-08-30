import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  admins:any;
  constructor(private adminService:AdminServiceService,private user:UserService) { }
  adminId= this.user.getId();
  ngOnInit(): void {
    this.adminService.getAllAdmin().subscribe((data)=>{
      this.admins=data;
      console.log(this.admins.t);
    })
  }

  deleteAdmin(adminId:any){

  }

}
