/*
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit{
  constructor(private router: Router) { }

username: string;
password: string;

  ngOnInit(){}
}

*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataserviceService, private router:Router) {
 
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1:NgForm)
  {
    this.dataService.userregistration(angForm1.value.username,angForm1.value.name,angForm1.value.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['login']);
          },
          error => {
          });
  }
  get username() { return this.angForm.get('username'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
}