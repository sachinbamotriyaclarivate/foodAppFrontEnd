import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  userIdPattern:any="^[0-9]$";
  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  selectedBranch:any
  error:any;
  errormsg:any
  constructor(private route:ActivatedRoute,private branch:BranchService,private router:Router) { }
  result:any;

  ngOnInit(): void {
    let branchId = this.route.snapshot.params['branchId'];
    console.log(branchId);
    this.branch.getAllBranches().subscribe((data)=>{
      this.result =data;
      for(let branch of this.result.t){
        if(branch.branchId==branchId){
          this.selectedBranch = branch;
          console.log(this.selectedBranch);
        }
      }
    })
  }

  editBranchForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern(this.mobnumPattern)]),
      adminId: new FormControl("",[Validators.pattern(this.userIdPattern)])
    })
  

  get  adminId(){
    return this.editBranchForm.get("adminId")
  }
  get name() {
    return this.editBranchForm.get("name");
  }
  get email() {
    return this.editBranchForm.get("email");
  }
  get phoneNumber() {
    return this.editBranchForm.get("phoneNumber");
  }


  editBranch(){
    this.branch.updateBranch(this.editBranchForm.value,this.selectedBranch.branchId).subscribe((res)=>{
      console.log(res);
      alert("Branch Updated Successfully")
    }
    ,(err)=>{
      this.error=err;
      this.errormsg=err.message;
      console.error(err.message);
    });
    
    this.router.navigateByUrl('/branch-details');
  }
}
