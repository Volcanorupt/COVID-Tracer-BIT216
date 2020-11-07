import {Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {Register} from '../post.model';
import {Record} from '../post.model';
import {PostsService} from '../posts.service';


@Component({
  selector :'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{

   registers: Register[] = [];
   private registersSub:Subscription;

   records: Record[] = [];

   constructor(public PostsService:PostsService){}

   ngOnInit(){
    this.PostsService.getRegisters();
    this.registersSub = this.PostsService.getRegistersUpdateListener()
    .subscribe((registers: Register[]) => {
      this.registers = registers;
    });

     this.records = this.PostsService.getRecords();
   }
}

