import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginService } from "../login/login.service";
import { UserLog } from "../login/userlog.model";
import { DataStorageService } from "../shared/dataStorage.service";

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html'
})
export class SentComponent {
constructor(private loginService:LoginService,private dataStorageService:DataStorageService){}
userlog = new BehaviorSubject<UserLog>(null);


  onClearFire(){
    this.dataStorageService.clearReviews();
    alert('Today Reviews cleared');
  }
  onFetch(){
      this.dataStorageService.fetchReviews().subscribe();
  }
  Logout(){
    this.loginService.onLogoutUser();
  }
}
