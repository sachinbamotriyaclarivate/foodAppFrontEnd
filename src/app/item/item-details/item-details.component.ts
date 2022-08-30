import { Component, DoCheck, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit,DoCheck {

  items:any;
  constructor(private itemSerive:ItemService,private user:UserService) { }
  branchManagerId:any;

  ngDoCheck(){  this.branchManagerId=this.user.getId();
  }
  ngOnInit(): void {
    this.itemSerive.getAllItems().subscribe((data)=>{
      this.items=data;
      console.log(this.items.t);
    })
  }
  deleteItem(itemId:any){

  }
}
