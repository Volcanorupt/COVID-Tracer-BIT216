import { UpdateKit } from './updateKit.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UpdateKitService {
  private updateKits: UpdateKit[] = [];

  getUpdateKits() {
    return this.updateKits;
  }

  addUpdateKit(kitName: string, numStock: number) {
    const updateKit: UpdateKit = { kitName: kitName, numStock: numStock };
    this.updateKits.push(updateKit);
  }

}
