import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Test } from '../recordNewTest/new-test.model';
import { TestService } from '../recordNewTest/new-test.service';

@Component({
  selector: 'app-update-test-result',
  templateUrl: './updateTestResult.component.html',
  styleUrls: ['./updateTestResult.component.css']
})

export class updateTestResultComponent implements OnInit {

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

  onLogout(){
    alert('Do you want to logout?')
  }

  onDelete(testId: string) {
    this.TestService.deleteTest(testId);
  }

}
