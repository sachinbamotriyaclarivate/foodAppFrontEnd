import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  constructor(private menuService:MenuService,private router:Router) { }

  ngOnInit(): void {
  }

  addFormMenu= new FormGroup(
    {}
  )
  addMenu(){
    this.menuService.addMenu(this.addFormMenu.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/menu-details'])
      
    })
  }

}
