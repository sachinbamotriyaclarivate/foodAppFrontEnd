import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin:any;
  constructor() { }
  isLoggedIn(){
    this.isLogin=localStorage.getItem("isLoggedIn");
    if(this.isLogin=="true"){
      return true;
    }
    else{
      return false;
    }
  }
  getRole(){
    return localStorage.getItem('userType');
  }
  getId(){
    return localStorage.getItem("id")
  }
  
}
