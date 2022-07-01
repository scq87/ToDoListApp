import {  Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../services/to-do-item.service';
import { ToDoListService } from '../services/to-do-list.service';
import { ToDoItem } from '../to-do-item';
@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit{
  model: any = {};
  todoitems : any
  user: any = {};
  nameLog : any;
  userId : any;
  constructor(private todoitemService: ToDoItemService, private todolistService: ToDoListService){

  }
  
  
  ngOnInit() {
      this.todoitemService.fetch(this.model).subscribe(todoitems =>{
        this.todoitems = todoitems;
        console.log('todo items',todoitems);
      })
      this.todolistService.getUser(this.model).subscribe(user =>{
        this.user = user;
        this.nameLog = localStorage.getItem("user");
        console.log('username', this.nameLog)
  
        this.user.forEach((item: any) => {
          if(item.username === this.nameLog)
          {
            this.userId = item.id
          }
        });
        console.log('userId todolist',user);
      })  
  }

}