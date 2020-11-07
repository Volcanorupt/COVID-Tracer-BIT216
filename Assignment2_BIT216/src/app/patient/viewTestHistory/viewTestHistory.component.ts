import { Component, OnInit } from '@angular/core';
import { patient } from '../patient.model';
import { TestService } from '../../tester/tester.service';

@Component({
  selector: 'app-testerHome',
  templateUrl: './viewTestHistory.component.html',
  styleUrls: ['./viewTestHistory.component.css']
})
export class viewTestHistoryComponent implements OnInit {
  tests: patient[] = [];

  constructor(public testservice: TestService) {

  }

  ngOnInit() {
    this.tests = this.testservice.getTests();
  }
}
