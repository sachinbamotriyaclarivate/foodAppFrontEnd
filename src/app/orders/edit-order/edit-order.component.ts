import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ItemService } from 'src/app/services/item.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  unamePattern :any= "^[a-zA-Z ]{3,30}$";
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  
  dropdownList: any = [];
  dropdownSettings: IDropdownSettings = {};

  selectedOrder:any
  error:any;
  errormsg:any
  constructor(private route:ActivatedRoute,private orderService:OrderService,private router:Router,private itemService:ItemService) { }
  result:any;

  ngOnInit(): void {
    let orderId = this.route.snapshot.params['id'];
    this.orderService.getAllOrders().subscribe((data)=>{
      this.result =data;
      for(let order of this.result.t){
        if(order.id==orderId){
          this.selectedOrder = order;
          console.log(this.selectedOrder.item);
          
        }
      }

      this.itemService.getAllItems().subscribe((data)=>{
        this.dropdownList=data;
      })
      this.dropdownSettings = {
            idField:'itemId',
            textField:'name',
      };

    })
  }

  editOrderForm = new FormGroup(
    {
      customerName:new FormControl("",[Validators.required,Validators.pattern(this.unamePattern)]),
      customerEmail: new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      customerPhoneNumber: new FormControl("", [Validators.required,Validators.pattern(this.mobnumPattern)]),
      status: new FormControl("",Validators.required),
      items: new FormControl("",Validators.required)

    })
  get customerName() {
    return this.editOrderForm.get("customerName");
  }

  get customerEmail() {
    return this.editOrderForm.get("customerEmail");
  }

  get customerPhoneNumber() {
    return this.editOrderForm.get("customerPhoneNumber");
  }

  get status() {
    return this.editOrderForm.get("status");
  }

  get items() {
    return this.editOrderForm.get("items");
  }
  

  get  name(){
    return this.editOrderForm.get("name")
  }
  get description() {
    return this.editOrderForm.get("description");
  }
  get price() {
    return this.editOrderForm.get("price");
  }
  get type() {
    return this.editOrderForm.get("type");
  }
  editOrder(){
    this.orderService.updateOrder(this.editOrderForm.value,this.selectedOrder.id).subscribe((res)=>{
      console.log(res);
    }
    ,(err)=>{
      this.error=err;
      this.errormsg=err.message;
      console.error(err.message);
    });
    alert("Order Updated")    
    this.router.navigateByUrl('/order-details');
  }


}
