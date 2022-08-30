import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {

  branches:any;
  constructor(private branchService:BranchService,private user:UserService) { }
  isAccess:any;
  adminId=this.user.getId();
  ngOnInit(): void {
    
    this.branchService.getAllBranches().subscribe((data)=>{
      this.branches=data;

      console.log(this.branches.t);
    })
  }
  deleteBranch(branchId:any){
  }

}
