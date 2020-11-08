import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Register } from './test-centre.models';
import { TestCentresService } from './test-centres.service';

@Component({
  selector: 'app-reg-tc',
  templateUrl: './reg-tc.component.html',
  styleUrls: ['./reg-tc.component.css']
})

export class RegisterTcComponent implements OnInit {

  enteredCentreName = '';
  enteredCentreTel = '';
  enteredCentreAdd = '';

  registers: Register[] = [];
  public registersSub: Subscription;

  constructor(private TestCentresService: TestCentresService) { }

  onAddTestCentre(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const { centreName, centreTel, centreAdd } = form.value;
    this.TestCentresService.addTestCentre(centreName, centreTel, centreAdd);
    form.resetForm();
  }

  onAddReg() {
    alert('Your registration is successful!');
  }

  ngOnInit() {
    this.TestCentresService.getRegisters();
    this.registersSub = this.TestCentresService.getRegistersUpdateListener()
      .subscribe((registers: Register[]) => {
        this.registers = registers;
      });
  }

}
