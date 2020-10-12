import {Component, OnInit} from '@angular/core';
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
   records: Record[] = [];

   constructor(public PostsService:PostsService){}

   ngOnInit(){
     this.registers = this.PostsService.getRegisters();
     this.records = this.PostsService.getRecords();
   }
}

