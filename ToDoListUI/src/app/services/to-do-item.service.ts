import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IToDoItem } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class ToDoItemService {
    constructor(private http: HttpClient){
        
    }
    baseUrl: string = "https://localhost:44362/api/todoitems/";
    fetch(model: any){ 
        return this.http.get(this.baseUrl, model)
    } 
    getById(model: any, id: any){
        return this.http.get(this.baseUrl + id, model)
    }
    edit(model: any, id: any){
        return this.http.put(this.baseUrl + id, model)
    }
    add(model: any){
        console.log('add-item',this.http.post(this.baseUrl, model));
        return this.http.post(this.baseUrl, model)
    }
    delete(model: any, id: any){
        return this.http.delete(this.baseUrl + id, model)
    }
}
    
