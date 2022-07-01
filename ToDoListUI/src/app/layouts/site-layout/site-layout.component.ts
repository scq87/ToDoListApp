import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/guard/material.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements  AfterViewInit {

 
  
  links = [
    {url: '/to-do-item', name: 'Задачи'},
    {url: '/to-do-lists', name: 'Списки'}
    // {url: '/add-item', name: 'Добавить задачу'},
    // {url: '/add-list', name: 'Добавить лист'},
    // {url: '/edit-item', name: 'Редактировать задачу'},
    // {url: '/owerview-item', name: 'Обзор'},
  ];
  constructor(private auth: AuthService, private router: Router) 
  {
    
   }

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton();
    MaterialService.initializeTapTarget();
  }
  logout(event: Event)
  {
    event.preventDefault()
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("Пользователь вышел из аккаунта");
    this.router.navigate(['/login']);
  }
}
