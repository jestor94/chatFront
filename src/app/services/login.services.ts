import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";


import { UrlService } from "./url.service";

import { Login } from "../objects/Login";

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type' : 'application/json'
    })
};

@Injectable()
export class LoginService { 

    constructor(private router: Router, private httpClient: HttpClient, private getUrl: UrlService){

    }
       
    public login(user: Login): Promise<string> {
        let login: Promise<string>
        
        login = new Promise((resolve, reject) => {
            this.httpClient.post(this.getUrl.getUrl()+"login", JSON.stringify({user: user.Username, password: user.Password}), httpOptions).subscribe((response: any) => {
                localStorage.setItem("userName", user.Username);
                console.log('Response ', response)
                resolve(response);
            });
        }); 
        return login
    }

}