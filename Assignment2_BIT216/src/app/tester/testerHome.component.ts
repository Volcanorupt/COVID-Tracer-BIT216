import { Component } from '@angular/core';

import { Test } from './recordNewTest/new-test.model';

@Component({
  selector: 'app-testerHome',
  templateUrl: './testerHome.component.html',
  styleUrls: ['./testerHome.component.css']
})

export class TesterHomeComponent {
  storedTests: Test[] = [];

  onTestAdded(test) {
    this.storedTests.push(test)
  }

}
