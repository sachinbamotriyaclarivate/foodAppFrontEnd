import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})

export class AddBranchComponent implements OnInit {
  
  userIdPattern:any="^[0-9]$";

  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  pwdPattern="^[A-Za-z0-9]{4,15}$";


  constructor(private branchService: BranchService,private route:Router) { }
  ngOnInit(): void {
  }
  addBranchForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern(this.mobnumPattern)])
    })

  get name() {
    return this.addBranchForm.get("name");
  }
  get email() {
    return this.addBranchForm.get("email");
  }
  get phoneNumber() {
    return this.addBranchForm.get("phoneNumber");
  }

  addBranch() {
    this.branchService.addBranch(this.addBranchForm.value).subscribe((data) => {
      console.log(data);
      alert("Branch Created Successfully");
      this.route.navigate(['/branch-details']);
    })
  }
}


