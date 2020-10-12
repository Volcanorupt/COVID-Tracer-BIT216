import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpdateKitService } from '../updateKit.service';

@Component({
  selector: 'app-manageKitStock',
  templateUrl: './newKit.component.html',
  styleUrls: ['./newKit.component.css']
})

export class NewKitComponent{

  enteredKitName='';
  enteredNumStock='';

  constructor(public UpdateKitService: UpdateKitService){}

  onAddUpdateKit(form: NgForm){

    if (form.invalid){
      return;
    }
    this.UpdateKitService.addUpdateKit(form.value.kitName,form.value.numStock);
      form.resetForm();
  }

  onAddKit(){
    alert('New stock has been added successfully!');
  }
}
