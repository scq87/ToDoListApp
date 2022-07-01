import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToDoItemService } from '../services/to-do-item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  
  id : number = 0;
  model: any;
  todoitem : any
  constructor(private activateRoute: ActivatedRoute, private router: Router, private todoitemService: ToDoItemService) {
    this.activateRoute.params.subscribe((params : any)=>{
      this.id = params['id'];
      console.log('id', this.id); 
  })
    this.todoitemService.getById(this.model,this.id).subscribe(todoitem =>{
    this.todoitem = todoitem;
    console.log('todo items',todoitem);
  })
 }
  
  ngOnInit(): void {
    
  }

  editItem(){
    console.log('edit items',this.todoitem);
    this.todoitemService.edit(this.todoitem,this.id).subscribe(() =>{
      this.router.navigate(['/to-do-item']);
      console.log('edit items',this.model);

    })
  }
}

