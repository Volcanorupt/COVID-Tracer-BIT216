import { Component } from '@angular/core';
import { UpdateKit } from '../updateKit.model';

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})

export class ManageStockComponent {

  storedUpdateKits: UpdateKit[] = [];

  onUpdateKit(updateKit) {
    this.storedUpdateKits.push(updateKit)
  }
}

