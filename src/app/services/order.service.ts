import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,private user:UserService) { }

  items: any;
  addOrders(order: any) {
    let itemId = "";
    this.items = order.items;
    this.items.forEach((item: any) => {
    itemId = itemId + item.itemId +",";
    });
    const staffId = localStorage.getItem("id");
    itemId = itemId.substring(0,itemId.length-1);
    console.log(itemId);
    return this.http.post(`http://localhost:8080/foodorder?items=${itemId}&staffId=${staffId}`, order);
  }
  getAllOrders(){
    return this.http.get("http://localhost:8080/foodorder");
  }
  updateOrder(order:any,orderId:any){
    let itemId = "";
    this.items = order.items;
    this.items.forEach((item: any) => {
    itemId = itemId + item.itemId +",";
    });
    const staffId = localStorage.getItem("id");
    itemId = itemId.substring(0,itemId.length-1);
    console.log(itemId);
    return this.http.put(`http://localhost:8080/foodorder?items=${itemId}&orderId=${orderId}`, order);

  }
  isOrder(){
    if(this.user.isLoggedIn() && this.user.getRole()=='Staff'){
      return true;
    }
    
    else{
      return false;
    }
   }
}
