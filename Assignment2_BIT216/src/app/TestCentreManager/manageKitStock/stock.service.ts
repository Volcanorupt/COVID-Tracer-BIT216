import { Stock } from './stock.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class StockService {
  
  private stocks: Stock[] = [];
  private stocksUpdated = new Subject<Stock[]>();

  constructor(private http: HttpClient) { }

  addStock(kitName: string, numStock: number) {
    const stock: Stock = { id: null, kitName: kitName, numStock: numStock };
    this.http
      .post<{ message: string, stockId: string }>('http://localhost:3000/api/stock', stock)
      .subscribe((responseData) => {
        const id = responseData.stockId;
        stock.id = id;
        this.stocks.push(stock);
        this.stocksUpdated.next([...this.stocks]);
      });
  }

  getStock() {
    this.http.get <any> ('http://localhost:3000/api/stock')
      .pipe(map((postData) => {
        return postData.stocks.map((stock: { kitName: any; numStock: any; _id: any; }) => {
          return {
            kitName: stock.kitName,
            numStock: stock.numStock,
            id: stock._id
          };
        });
      }))

      .subscribe((transformedStocks) => {
        this.stocks = transformedStocks;
        this.stocksUpdated.next([...this.stocks]);
      })
     
  }

  getStocksUpdateListener() {
    return this.stocksUpdated.asObservable();
  }

}
