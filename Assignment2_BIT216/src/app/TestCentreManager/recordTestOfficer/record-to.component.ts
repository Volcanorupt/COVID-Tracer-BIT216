import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-recordTestOfficer',
  templateUrl: './record-to.component.html',
  styleUrls: ['./record-to.component.css']
})

export class RecordToComponent{

  enteredOfficerFullName ='';
  enteredOfficerUsername ='';
  enteredOfficerPassword ='';

  constructor(public PostsService: PostsService){}

  onAddRecord(form: NgForm){

    if (form.invalid){
      return;
    }
    this.PostsService.addRecord(form.value.officerFullName,form.value.officerUsername,form.value.officerPassword);
      form.resetForm();
  }

  onAddRec(){
    alert('New Tester recorded successfully!');
  }
}
