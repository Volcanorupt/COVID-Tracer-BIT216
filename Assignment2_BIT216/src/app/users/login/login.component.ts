/*
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit{
  constructor(private router: Router) { }

username: string;
password: string;

  ngOnInit(){}
}

*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import {DataserviceService} from '../dataservice.service'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  angForm: FormGroup;
  
  constructor(private fb: FormBuilder, private dataService: DataserviceService, private router:Router) {
    this.angForm = this.fb.group({
 
      username: ['', Validators.required],
      password: ['', Validators.required]
 
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1: NgForm)
  {
    this.dataService.userlogin(angForm1.value.username,angForm1.value.password)
      .pipe(first())
      .subscribe(
          data => {
                const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/tcmHome';
                this.router.navigate([redirect]);
 
          },
          error => {
              alert("Username or password is incorrect")
          });
  }
  get username() { return this.angForm.get('username'); }
  get password() { return this.angForm.get('password'); }
}