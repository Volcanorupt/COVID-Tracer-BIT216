import {Component,OnInit} from '@angular/core';
import {Test} from '../tester.model';
import { TestService } from '../tester.service';

@Component({
  selector:'app-update-test-result',
  templateUrl: './updateTestResult.component.html',
  styleUrls: ['./updateTestResult.component.css']
})

export class updateTestResultComponent implements OnInit{

  tests: Test[] = [];

  constructor(public testservice: TestService) {

  }

  ngOnInit(){
    this.tests = this.testservice.getTests();
  }



}
