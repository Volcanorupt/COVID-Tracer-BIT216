import { Component, OnInit } from '@angular/core';
import { UpdateKit } from '../updateKit.model';
import { UpdateKitService } from '../updateKit.service';


@Component({
  selector: 'app-updateKit',
  templateUrl: './updateKit.component.html',
  styleUrls: ['./updateKit.component.css']
})

export class UpdateKitComponent implements OnInit {

  updateKits: UpdateKit[] = [];

  constructor(public UpdateKitService: UpdateKitService) { }

  ngOnInit() {
    this.updateKits = this.UpdateKitService.getUpdateKits();
  }
}
