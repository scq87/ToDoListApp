import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToDoItemService } from '../services/to-do-item.service';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  model: any = {};
  todoitems : any
  todolist : any = {}
  todolistforeach : any = {}
 
  user:any = {}
  nameLog: any
  userId : any
  constructor(private todoitemService: ToDoItemService, private router: Router, private todolistService : ToDoListService){

  }
  ngOnInit() {
    this.todolistService.getUser(this.model).subscribe(user =>{
      this.user = user;
      this.nameLog = localStorage.getItem("user");
      console.log('username', this.nameLog)

      this.user.forEach((item: any) => {
        if(item.username === this.nameLog)
        {
          this.userId = item.id
          this.todolistService.showListsById(this.model, this.userId ).subscribe(todolist =>{
            this.todolist = todolist;
            console.log('todo todolist', this.todolist);
            // this.todolist.forEach((item: any) => {
            //   if(item.personid === this.userId)
            //   {
            //     this.todolistforeach += item;
            //   }
            // })
           
          }) 
        }
      });
      console.log('userId todolist',user);
    }) 

   
   }
  add(){
    this.model.personid = this.userId;
    console.log(JSON.stringify(this.model));
    this.todoitemService.add(this.model).subscribe(todoitems =>{
      this.router.navigate(['/to-do-item']);
      console.log('add-item',todoitems);
      this.todoitems = todoitems;

    })
  }
}
