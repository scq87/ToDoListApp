import { Component, Injectable,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MaterialService} from '../guard/material.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',  
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent implements OnInit {

  
  public model: any = {};
  
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {

    
   }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params: Params)=> {
      if(params['registered']){
        MaterialService.toast('Вы успешно зарегистрированны')
      }
      else if(params['accessDenied']){
        MaterialService.toast('Для начала авторизуйтесь в системе')
      }
      else if(params['sessionFailed']){
        MaterialService.toast('Пожалуйста войдите в систему заново')
      }
    })
  }
  
    login(){
      console.log(JSON.stringify(this.model));
      this.auth.login(this.model).subscribe(
        next=>{this.router.navigate(['/to-do-lists'])},
      error=>{
        MaterialService.toast('Такого пользователя не существует')
        console.log(error);
      })
    }
  
}
