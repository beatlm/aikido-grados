import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       console.log("Entra en canActivate");
       console.log(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
           console.log("Autenticado ok");
            // logged in so return true
            return true;
        }
        console.log("Autenticado ko");

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/']);
        return false;
    }
}