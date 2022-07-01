import { Component,  OnInit } from '@angular/core';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-to-do-lists',
  templateUrl: './to-do-lists.component.html',
  styleUrls: ['./to-do-lists.component.css']
})
export class ToDoListsComponent implements OnInit { 

  model: any = {};
  todolist : any
  user: any = {};
  nameLog : any;
  userId : any;

  constructor(private todolistService: ToDoListService){
    
   }
  
  ngOnInit() {
    this.todolistService.showLists(this.model).subscribe(todolist =>{
      this.todolist = todolist;
      console.log('todo todolist',todolist);
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
