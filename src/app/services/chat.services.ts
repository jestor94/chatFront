import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { UrlService } from "./url.service";

import { Chat } from "../objects/Chat";

import * as io from 'socket.io-client';

const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type' : 'application/json'
    })
};

@Injectable()
export class ChatService { 

    private socket;
    private url = 'http://localhost:3000/'; 

    constructor(private router: Router, private httpClient: HttpClient, private getUrl: UrlService, ){
        this.socket = io( this.url, {
            extraHeaders: {
              'Access-Control-Allow-Credentials': 'omit',
              'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            
          });
    }
       
    public sendMessage(message) {
        this.socket.emit('new-message', localStorage.getItem('userName')+': '+message);
    }

    public getMessages = () => {
        
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                console.log('observer event')
                observer.next(message);
            });
        });
    }

}