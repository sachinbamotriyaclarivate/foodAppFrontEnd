import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  numberPattern:any="^[0-9]{0,30}$";
  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  constructor(private itemService:ItemService,private route:Router) { }

  ngOnInit(): void {
  }

  addItemForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      description:new FormControl("",[Validators.required]),
      price:new FormControl("",[Validators.required, Validators.pattern(this.numberPattern)]),
      type:new FormControl("",[Validators.pattern(this.unamePattern)]),
      menuId:new FormControl("",[Validators.required, Validators.pattern(this.numberPattern)])

    })
    get name(){
      return this.addItemForm.get("name");
    }

    get description(){
      return this.addItemForm.get("description");
    }

    get price(){
      return this.addItemForm.get("price");
    }

    get type(){
      return this.addItemForm.get("type");
    }
    
    get menuId(){
      return this.addItemForm.get("menuId");
    }
    addItem(){
      this.itemService.addItem(this.addItemForm.value).subscribe((data)=>{
        console.log(data);
        alert("Item Added")
        this.route.navigate(['/item-details']);
        
      })
    }
}
