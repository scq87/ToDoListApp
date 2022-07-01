import { Injectable } from "@angular/core";
import { CanActivateChild,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanActivate {
    constructor(private auth: AuthService, private router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if(this.auth.loggedIn()){
            return of(true)
        }else{
            this.router.navigate(['/login'],
            {
                queryParams:{
                    accesDenied: true
                }
            })
            return of(false)
        }
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state)
    }   
}