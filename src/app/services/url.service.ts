import { Injectable } from "@angular/core";

@Injectable()
export class UrlService { 

    constructor(){

    }
       
    public getUrl(): string{
        let url = "http://localhost:3000/moons/";
        return url;
    }

}