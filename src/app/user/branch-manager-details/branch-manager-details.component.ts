import { Component, OnInit } from '@angular/core';
import { BranchManagerService } from 'src/app/services/branch-manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-branch-manager-details',
  templateUrl: './branch-manager-details.component.html',
  styleUrls: ['./branch-manager-details.component.css']
})
export class BranchManagerDetailsComponent implements OnInit {

  branchManager:any;
  constructor(private branchManagerService:BranchManagerService,private user:UserService) { }
  adminId=this.user.getId();

  ngOnInit(): void {
    this.branchManagerService.getAllBranchManagers().subscribe((data)=>{
      this.branchManager=data;
      console.log(this.branchManager.t);
    })
  }

  deleteBranchManager(branchManagerId:any){

  }

}
