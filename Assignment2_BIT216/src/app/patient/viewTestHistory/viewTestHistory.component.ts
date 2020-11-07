import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Test } from '../../tester/recordNewTest/new-test.model';
import { TestService } from '../../tester/recordNewTest/new-test.service';

@Component({
  selector: 'app-testerHome',
  templateUrl: './viewTestHistory.component.html',
  styleUrls: ['./viewTestHistory.component.css']
})
export class viewTestHistoryComponent implements OnInit {
  enteredPatientName = '';
  enteredPatientType = '';
  enteredPatientSymptoms = '';

  tests: Test[] = [];
  private testsSub: Subscription;

  constructor(private TestService: TestService) { }

  ngOnInit() {
    this.TestService.getTests();
    this.testsSub = this.TestService.getTestsUpdateListener()
      .subscribe((tests: Test[]) => {
        this.tests = tests;
      });
  }
}
