import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{
  constructor(private router: Router,private loginService:LoginService){}
 onDownload(lform: NgForm){

    if(lform.value.pass=="Fathima"){
      this.loginService.onUser();
      this.router.navigate(['/sent']);
      lform.reset();
    }
    else{
      alert('Wrong Username');
      lform.reset();
    }
  }
}

