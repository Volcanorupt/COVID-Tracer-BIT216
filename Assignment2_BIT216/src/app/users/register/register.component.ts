
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit {

  users: User[] = [];
  public usersSub: Subscription;

  constructor(private UserService: UserService) { }


  onAddUser(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const { name, username, password } = form.value;
    this.UserService.addUser(name, username, password);
    form.resetForm();
  }

  onAddReg() {
    alert('New user created successfully!');
  }

  ngOnInit() {
    this.UserService.getUser();
    this.usersSub = this.UserService.getUsersUpdateListener()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }
}

