import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../interfaces";

@Injectable({
    providedIn: "root"
})
export class AuthService{

    private token : string;
    
   

    constructor(private http: HttpClient){
      this.token ='';
    }

    baseUrl: string = "https://localhost:44362/api/auth/";
    login(model: any) { 
        return this.http.post(this.baseUrl + "login", model) 
          .pipe(map((response: any) => { 
            const user = response; 
            if (user) { 
              localStorage.setItem("user",model.username)
              localStorage.setItem("token", user.token); 
              this.setToken(user.token);
              
            } 
          }) 
          ) 
      } 
      
      register(model: any){ 
        return this.http.post(this.baseUrl + "register", model); 
      }
      setToken(token: string){
        this.token = token;
      }
      loggedIn()
      {
        const token = localStorage.getItem("token");
        return !!token;
      }
      getToken():string{
        return this.token;
      }
    
}