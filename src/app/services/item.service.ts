import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private https:HttpClient,private user:UserService) { }
  
  addItem(item:any){
    return this.https.post("http://localhost:8080/item/"+item.menuId,item);
   }
   getAllItems(){
    return this.https.get("http://localhost:8080/item");
   }

   updateItem(item:any,itemId:any){
    return this.https.put("http://localhost:8080/item/"+itemId,item);
   }

   isItem(){
    if(this.user.isLoggedIn() && this.user.getRole()=='Admin' || this.user.getRole()=='BranchManager'){
      return true;
    }
    else {
      return false;
    }
   }
}




