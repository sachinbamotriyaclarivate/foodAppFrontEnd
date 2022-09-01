import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit ,DoCheck{
  isLoggedIn=false;
 

  constructor(private router:Router,private user:UserService) { }
  ngDoCheck(): void {
    this.isLoggedIn=localStorage.getItem('isLoggedIn')=='true'?true:false;
  }

  ngOnInit(): void {
  }
  logout(){
    this.isLoggedIn=false;
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem("userType");
    localStorage.removeItem("id");
    this.router.navigate(['/login']);
  }

  

}
