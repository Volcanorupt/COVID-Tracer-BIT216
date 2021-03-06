import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Stock } from '../stock.model';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-updateKit',
  templateUrl: './updateKit.component.html',
  styleUrls: ['./updateKit.component.css']
})

export class UpdateKitComponent implements OnInit {

  stocks: Stock[] = [];
  public stocksSub: Subscription;

  constructor(public StockService: StockService) { }

  ngOnInit() {
    this.stocksSub = this.StockService.getStocksUpdateListener()
      .subscribe((stocks: Stock[]) => {
        this.stocks = stocks;
        console.log(stocks)
      });
    this.StockService.getStock();
  }

  onLogout(){
    alert('Do you want to logout?')
  }

  onDelete(stockId: string) {
    this.StockService.deleteStock(stockId);
  }
}
