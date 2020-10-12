import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-reg-tc',
  templateUrl: './reg-tc.component.html',
  styleUrls: ['./reg-tc.component.css']
})

export class RegisterTcComponent{

enteredCentreName ='';
enteredCentreTel ='';
enteredCentreAdd ='';


constructor(public PostsService: PostsService){}

onAddRegister(form: NgForm){

  if (form.invalid){
    return;
  }
    this.PostsService.addRegister(form.value.centreName,form.value.centreTel,form.value.centreAdd);
    form.resetForm();
  }

  onAddReg(){
    alert('Your registration is successful!');
  }
}
