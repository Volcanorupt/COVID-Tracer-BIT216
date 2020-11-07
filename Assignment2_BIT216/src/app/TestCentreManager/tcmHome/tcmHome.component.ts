import { Component } from '@angular/core';
//import {Register} from '../post.model';
//import {Record} from '../post.model';
import { Generate } from '../post.model';

@Component({
  selector: "app-tcmHome",
  templateUrl: "./tcmHome.component.html",
  styleUrls: ["./tcmHome.component.css"]
})

export class TcmHomeComponent {

  //storedRegisters: Register[] = [];
  //storedRecords: Record[] = [];
  storedGenerate: Generate[] = [];

  /*onAddRegister(registers: Register){
    this.storedRegisters.push(registers)
  }

  onAddRecord(records: Record){
    this.storedRecords.push(records)
  }*/

  onAddGenerate(generates: Generate) {
    this.storedGenerate.push(generates)
  }

}
