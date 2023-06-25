import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UserLog } from "./userlog.model";
@Injectable({ providedIn: 'root' })
export class LoginService{
  constructor(private router:Router){}

  userlog = new BehaviorSubject<UserLog>(null);

  onUser(){
    this.userlog.next({name:'fathima'});
  }
  
  onLogoutUser(){
    this.userlog.next(null);
    this.router.navigate(['/login']);
  }
}
