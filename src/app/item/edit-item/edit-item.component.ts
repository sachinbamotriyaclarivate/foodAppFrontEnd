import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  numberPattern:any="^[0-9]{0,30}$";
  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  selectedItem:any
  error:any;
  errormsg:any
  constructor(private route:ActivatedRoute,private itemService:ItemService,private router:Router) { }
  result:any;

  ngOnInit(): void {
    let itemId = this.route.snapshot.params['itemId'];
    console.log(itemId);
    this.itemService.getAllItems().subscribe((data)=>{
      this.result =data;
      for(let item of this.result.t){
        if(item.itemId==itemId){
          this.selectedItem = item;
          console.log(this.selectedItem);
        }
      }
    })
  }

  editItemForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      description:new FormControl("",[Validators.required]),
      price:new FormControl("",[Validators.required,Validators.pattern(this.numberPattern)]),
      type:new FormControl("",[Validators.pattern(this.unamePattern)]),
    })
  

  get  name(){
    return this.editItemForm.get("name")
  }
  get description() {
    return this.editItemForm.get("description");
  }
  get price() {
    return this.editItemForm.get("price");
  }
  get type() {
    return this.editItemForm.get("type");
  }

  
  editItem(){
    this.itemService.updateItem(this.editItemForm.value,this.selectedItem.itemId).subscribe((res)=>{
      console.log(res);
    }
    ,(err)=>{
      this.error=err;
      this.errormsg=err.message;
      console.error(err.message);
    });
    
    this.router.navigateByUrl('/item-details');
  }

}
