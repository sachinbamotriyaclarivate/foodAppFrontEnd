import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  staffId:any;
  orders:any;
  constructor(private orderService:OrderService,private user:UserService) { }

  ngDoCheck(){
    this.staffId =this.user.getId();
  }
  ngOnInit(): void {
    this.staffId =this.user.getId();
    this.orderService.getAllOrders().subscribe((data)=>{
      this.orders=data;
      console.log(this.orders.t);
    })
  }
  deleteOrder(id:any){}
}
