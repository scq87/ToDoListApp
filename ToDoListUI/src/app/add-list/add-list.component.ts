import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  model: any = {}
  userModel: any 
  todolist : any
  user:any = {}
  nameLog: any
  userId : any

  constructor(private todolistService: ToDoListService, private router: Router, private person :AuthService){
  }
  ngOnInit() {
    this.todolistService.getUser(this.model).subscribe(user =>{
      this.user = user;
      this.nameLog = localStorage.getItem("user");
      console.log('username', this.nameLog)

      this.user.forEach((item: any) => {
        if(item.username === this.nameLog)
        {
          this.userModel = item;
          this.userId = item.id
        }
      });
      console.log('userId todolist',user);
      console.log('user',this.userModel);
    })  
  }
  
  add(){
    this.model.personid = this.userId;
    console.log(JSON.stringify(this.model));
    this.todolistService.add(this.model).subscribe(todolist =>{
      this.router.navigate(['/to-do-lists']);
      console.log('add-list',todolist);
      this.todolist = todolist;

    })
  }
}
