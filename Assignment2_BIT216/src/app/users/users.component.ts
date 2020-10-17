/*
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})

export class UsersComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(){}
}

*/

import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  loginbtn:boolean;
  logoutbtn:boolean;
  constructor(private dataService: DataserviceService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }
 
 
}
private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
}
logout()
{
  this.dataService.deleteToken();
  window.location.href = window.location.href;
}
}