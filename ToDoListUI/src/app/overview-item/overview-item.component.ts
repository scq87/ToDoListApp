import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItemService } from '../services/to-do-item.service';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.css']
})
export class OverviewItemComponent implements OnInit {
  
  id : number = 0;
  model: any;
  todoitem : any
    constructor(private activateRoute: ActivatedRoute,private todoitemService: ToDoItemService,private router: Router) {
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
  deleteItem(){
    const decision = window.confirm('Вы уверены что хотите удалить эту задачу?');

    if(decision)
    {
      this.todoitemService.delete(this.todoitem,this.id).subscribe(() =>{
        this.router.navigate(['/to-do-item']);
        console.log('delete items',this.model);
  
      })
    }
   
  }
 
}
