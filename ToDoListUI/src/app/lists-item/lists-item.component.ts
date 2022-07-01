import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItemService } from '../services/to-do-item.service';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-lists-item',
  templateUrl: './lists-item.component.html',
  styleUrls: ['./lists-item.component.css']
})
export class ListsItemComponent implements OnInit {


  id : number = 0
  model: any = {};
  todoitems : any
  user: any = {};
  nameLog : any;
  userId : any;
  constructor(private activateRoute: ActivatedRoute, private todoitemService: ToDoItemService, private todolistService: ToDoListService){
    this.activateRoute.params.subscribe((params : any)=>{
      this.id = params['id'];
      console.log('id', this.id); 
    })
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
