import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private loginService:LoginService){}

  ngOnInit() {
    this.userSub = this.loginService.userlog.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}

//firebase link-> https://menu-app-ad6be-default-rtdb.firebaseio.com/


