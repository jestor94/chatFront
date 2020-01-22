import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../app/services/login.services';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"
]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService,
              ){
  
  }

  public ngOnInit(): void {
    
  }

  public Login(f: NgForm){
    let form = f.value;
    this.loginService.login(form).then((response: any) => {
      if(response.length == 0){
        console.log('Error Login')
        f.reset();
      }else{

        this.router.navigate(["/chat"]);
      }
    });

  }

}



