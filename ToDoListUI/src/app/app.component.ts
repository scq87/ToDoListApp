import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToDoItem } from './to-do-item';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService){

  }
  ngOnInit(){
    const potentialToken = localStorage.getItem('token')
    if(potentialToken != null){
        this.auth.setToken(potentialToken);
    }
  }
}

