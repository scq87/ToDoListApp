import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  id : number = 0;
  model: any;
  todolist : any
  constructor(private activateRoute: ActivatedRoute, private router: Router, private todolistService: ToDoListService) {
    this.activateRoute.params.subscribe((params : any)=>{
      this.id = params['id'];
      console.log('id', this.id); 
  })
    this.todolistService.getById(this.model,this.id).subscribe(todolist =>{
    this.todolist = todolist;
    console.log('todo list',todolist);
  })
 }
  
  ngOnInit(): void {
    
  }

  editItem(){
    console.log('edit list',this.todolist);
    this.todolistService.edit(this.todolist,this.id).subscribe(() =>{
      this.router.navigate(['/to-do-lists']);
      console.log('edit list',this.model);

    })
  }
  
  deleteItem(){
    const decision = window.confirm('Вы уверены что хотите удалить этот список?');

    if(decision)
    {
      this.todolistService.delete(this.todolist,this.id).subscribe(() =>{
        this.router.navigate(['/to-do-lists']);
        console.log('delete list',this.model);
  
      })
    }
   
  }
}
