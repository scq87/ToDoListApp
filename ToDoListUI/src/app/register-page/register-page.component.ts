import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../guard/material.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

 
  model: any = {};

  @Output() cancelRegister = new EventEmitter<boolean>();
  
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
   
  }

  ngOnInit(): void {
   
  }

  register(){
    console.log(this.model);
    this.auth.register(this.model).subscribe((data)=>
    {
      this.router.navigate(['/login'], { queryParams:{ registered: true}});
      this.cancelRegister.emit(false);
    },
    error=>{
      MaterialService.toast("Пользователь с таким именем уже существует")
    }
    );
  }
}
