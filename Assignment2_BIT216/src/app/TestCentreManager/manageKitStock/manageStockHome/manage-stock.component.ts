import { Component } from '@angular/core';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})

export class ManageStockComponent {

  stocks: Stock[] = [];

  onUpdateKit(updateKit) {
    this.stocks.push(updateKit)
  }

  onLogout(){
    alert('Do you want to logout?')
  }
}

