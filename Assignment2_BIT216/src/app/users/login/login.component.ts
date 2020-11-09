
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor(private UserService: UserService) { }

  onAddUser(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const { name, username, password } = form.value;
    this.UserService.addUser(name, username, password);
    form.resetForm();
  }

  onAddLogin() {
    alert('Login successful!');
  }

  ngOnInit() { }
}

