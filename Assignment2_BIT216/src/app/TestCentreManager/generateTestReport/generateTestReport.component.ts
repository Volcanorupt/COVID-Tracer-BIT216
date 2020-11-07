import { Component, OnInit } from '@angular/core';
import { Generate } from '../post.model';
import { TestService } from '../../tester/tester.service';

@Component({
  selector: 'app-generateTestReport',
  templateUrl: './generateTestReport.component.html',
  styleUrls: ['./generateTestReport.component.css']
})

export class GenerateTestReportComponent implements OnInit {

  reports: Generate[] = [];

  constructor(public testservice: TestService) { }

  ngOnInit() {
    this.reports = this.testservice.getTests();
  }

}
