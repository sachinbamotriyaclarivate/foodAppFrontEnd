import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ItemService } from 'src/app/services/item.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  dropdownList: any = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private itemService: ItemService,private order:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((data) => {
      this.dropdownList = data;
      this.dropdownSettings = {
        idField: 'itemId',
        textField: 'name',
      };
    })
  }
  addOrderForm = new FormGroup(
    {
      customerName:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      customerEmail: new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      customerPhoneNumber: new FormControl("", [Validators.required,Validators.pattern(this.mobnumPattern)]),
      status: new FormControl("",Validators.required),
      items: new FormControl("",Validators.required)

    })
  get customerName() {
    return this.addOrderForm.get("customerName");
  }

  get customerEmail() {
    return this.addOrderForm.get("customerEmail");
  }

  get customerPhoneNumber() {
    return this.addOrderForm.get("customerPhoneNumber");
  }

  get status() {
    return this.addOrderForm.get("status");
  }

  get items() {
    return this.addOrderForm.get("items");
  }
  result: any;

  addOrder() {
    this.result = this.addOrderForm.value;
    console.log(this.result);
    
    this.order.addOrders(this.result).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/order-details'])

      
    })
   
   
  }
  onChange(event: any) {

  }
}
