import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


import { StockService } from '../stock.service';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-manageKitStock',
  templateUrl: './newKit.component.html',
  styleUrls: ['./newKit.component.css']
})

export class NewKitComponent implements OnInit {

  enteredKitName = '';
  enteredNumStock = '';

  stocks: Stock[] = [];
  private stocksSub: Subscription;

  constructor(private StockService: StockService) { }

  onAddStock(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const { kitName, numStock } = form.value;
    this.StockService.addStock(form.value.kitName, form.value.numStock);
    form.resetForm();
  }

  onAddKit() {
    alert('New stock has been added successfully!');
  }

  ngOnInit() {
    this.stocksSub = this.StockService.getStocksUpdateListener()
      .subscribe((stocks: Stock[]) => {
        this.stocks = stocks;
        console.log(stocks)
      });
    this.StockService.getStock();
  }
}
