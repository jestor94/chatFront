import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// New Components

import { LoginComponent } from '../pages/login/login.component';
import { ChatComponent } from '../pages/chat/chat.component';

// New Modules
import { AppMaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// New Services

import { LoginService } from './services/login.services';
import { UrlService } from './services/url.service'
import { ChatService } from './services/chat.services'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UrlService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
