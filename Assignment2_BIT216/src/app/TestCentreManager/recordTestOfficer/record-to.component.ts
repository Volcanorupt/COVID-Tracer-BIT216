import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TesterService } from './testers.service';
import { Tester } from './tester.model';

@Component({
  selector: 'app-recordTestOfficer',
  templateUrl: './record-to.component.html',
  styleUrls: ['./record-to.component.css']
})

export class RecordToComponent implements OnInit {

  enteredOfficerName = '';
  enteredOfficerPosition = '';
  enteredTestCentreId = '';

  testers: Tester[] = [];
  private testersSub: Subscription;

  constructor(private TesterService: TesterService) { }

  onAddTester(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const { officerName, officerPosition, testCentreId } = form.value;
    this.TesterService.addTester(form.value.officerFullname, form.value.officerPosition, form.value.testCentreId);
    form.resetForm();
  }

  onAddRec() {
    alert('New Tester recorded successfully!');
  }

  ngOnInit() {
    this.TesterService.getTesters();
    this.testersSub = this.TesterService.getTestersUpdateListener()
      .subscribe((testers: Tester[]) => {
        this.testers = testers;
      });
  }
}
