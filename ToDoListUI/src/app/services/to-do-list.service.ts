import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IToDoItem } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class ToDoListService {
    constructor(private http: HttpClient){
    }

        baseUrl: string = "https://localhost:44362/api/todolists/";
        getUser(model: any){
            return this.http.get(this.baseUrl + "user", model)
        }
        showListsById(model: any, id: any){ 
            return this.http.get(this.baseUrl + "GetListByUser/" +id, model)
        } 
        showLists(model: any){ 
            return this.http.get(this.baseUrl, model)
        } 
        getById(model: any, id: any){
            return this.http.get(this.baseUrl + id, model)
        }
        edit(model: any, id: any){
            return this.http.put(this.baseUrl + id, model)
        }
        add(model: any){
            return this.http.post(this.baseUrl, model)
        }
        delete(model: any, id: any){
            return this.http.delete(this.baseUrl + id, model)
}
}
