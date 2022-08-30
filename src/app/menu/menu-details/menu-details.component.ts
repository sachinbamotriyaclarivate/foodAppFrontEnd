import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  menues: any;

  constructor(private menuService: MenuService,private user:UserService) { }

  branchManagerId= this.user.getId();
  ngOnInit(): void {
    this.menuService.getAllMenu().subscribe((data) => {
      this.menues = data;
      console.log(this.menues.t);
    })
  }

  deleteMenu(menuId: any) {
  }

}
