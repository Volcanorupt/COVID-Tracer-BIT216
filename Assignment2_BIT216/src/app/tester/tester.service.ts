import {Test} from './tester.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class TestService {
  private tests: Test[] = [];

  getTests(){
    return this.tests;
  }

 addTest(patientUsername: string, patientPassword: string, patientName: string, patientType: string, patientSymptoms: string) {
   const test: Test = {patientUsername: patientUsername, patientPassword:patientPassword, patientName:patientName, patientType:patientType, patientSymptoms:patientSymptoms };
   this.tests.push(test);
  }
}
