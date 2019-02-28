import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  user:User
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {
    this.user =JSON.parse(localStorage.getItem("userId"));
    if(this.user.role==="Store Manager"){
      return true;
    }
    else{
      window.alert("You Are Not Authorised...Become A Store Manager First");
      return false;
    }
    
  }
}
