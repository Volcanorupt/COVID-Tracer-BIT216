import { Component } from '@angular/core';
import { Test } from '../tester.model';
import { NgForm } from '@angular/forms';
import { TestService } from '../tester.service';

@Component({
  selector: 'app-record-new-test',
  templateUrl: './recordNewTest.component.html',
  styleUrls: ['./recordNewTest.component.css']
})

export class recordNewTestComponent {
  enteredPatientUsername = '';
  enteredPatientPassword = '';
  enteredPatientName = '';
  enteredPatientType = '';
  enteredPatientSymptoms = '';

  constructor(public testService: TestService) { }

  onAddTest(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.testService.addTest(form.value.patientUsername, form.value.patientPassword, form.value.patientName, form.value.patientType, form.value.patientSymptoms);
    form.resetForm();


  }
  onAddReg() {
    alert('Test Recorded Successful');
  }


}

