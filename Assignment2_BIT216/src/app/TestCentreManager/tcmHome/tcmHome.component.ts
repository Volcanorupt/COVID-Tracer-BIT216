import { Component } from '@angular/core';

@Component({
  selector: "app-tcmHome",
  templateUrl: "./tcmHome.component.html",
  styleUrls: ["./tcmHome.component.css"]
})

export class TcmHomeComponent {

  onLogout(){
    alert('Do you want to logout?')
  }

}
