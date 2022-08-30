import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagerService } from 'src/app/services/branch-manager.service';

@Component({
  selector: 'app-edit-branch-manager',
  templateUrl: './edit-branch-manager.component.html',
  styleUrls: ['./edit-branch-manager.component.css']
})
export class EditBranchManagerComponent implements OnInit {

  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  selectedBranchManager:any
  error:any;
  errormsg:any
  constructor(private route:ActivatedRoute,private branchManager:BranchManagerService,private router:Router) { }
  result:any;

  ngOnInit(): void {
    let branchManagerId = this.route.snapshot.params['branchManagerId'];
    this.branchManager.getAllBranchManagers().subscribe((data)=>{
      this.result =data;
      for(let branchManager of this.result.t){
        if(branchManager.branchManagerId==branchManagerId){
          this.selectedBranchManager = branchManager;
          console.log(this.selectedBranchManager);
        }
      }
    })
  }

  editBranchManagerForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      email: new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password: new FormControl("", [Validators.required]),
    })
  


  get name() {
    return this.editBranchManagerForm.get("name");
  }
  get email() {
    return this.editBranchManagerForm.get("email");
  }
  get password() {
    return this.editBranchManagerForm.get("password");
  }


  editBranchManager(){
    this.branchManager.updateBranchManager(this.editBranchManagerForm.value,this.selectedBranchManager.branchManagerId).subscribe((res)=>{
      console.log(this.selectedBranchManager.branchManagerId);
    }
    ,(err)=>{
      this.error=err;
      this.errormsg=err.message;
      console.error(err.message);
    });
    
    this.router.navigateByUrl('/branchManager-details');
  }

}
