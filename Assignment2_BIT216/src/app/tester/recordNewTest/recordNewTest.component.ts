import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Test } from './new-test.model';
import { TestService } from './new-test.service';

@Component({
  selector: 'app-record-new-test',
  templateUrl: './recordNewTest.component.html',
  styleUrls: ['./recordNewTest.component.css']
})

export class recordNewTestComponent {

  //enteredPatientName = '';
  //enteredPatientType = '';
  //enteredPatientSymptoms = '';

  tests: Test[] = [];
  public testsSub: Subscription;

  constructor(private TestService: TestService) { }

  onAddTest(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const { patientName, patientType, patientSymptoms } = form.value;
    this.TestService.addTest(patientName, patientType, patientSymptoms);
    form.resetForm();
  }

  onAddRec() {
    alert('New test created successfully!');
  }

  ngOnInit() {
    this.TestService.getTests();
    this.testsSub = this.TestService.getTestsUpdateListener()
      .subscribe((tests: Test[]) => {
        this.tests = tests;
      });
  }


}

