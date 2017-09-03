/********************************************
 Angular 2/4 App Module
Path: /app/app.module.ts
The app module defines the root module of the application along with metadata about the module. For more info about angular 2 modules check out this page on the official docs site.

This is where the fake backend provider is added to the application, to switch to a real backend simply remove the providers located under the comment "// providers used to create fake backend".
******************************************* */



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule }    from '@angular/forms';
//import { HttpModule } from '@angular/http';
 
// // used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }   from './app.routing';

// import { AlertComponent } from './_directives/index';
// import { AuthGuard } from './_guards/index';
// import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';

import {AlertComponent} from './_directives/alert.component'

@NgModule({
  declarations: [
    AppComponent,AlertComponent,HomeComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


// @NgModule({
//   imports: [
//       BrowserModule,
//       FormsModule,
//       HttpModule,
//       routing
//   ],
//   declarations: [
//       AppComponent,
//       AlertComponent,
//       HomeComponent,
//       LoginComponent,
//       RegisterComponent
//   ],
//   providers: [
//       AuthGuard,
//       AlertService,
//       AuthenticationService,
//       UserService,

//       // providers used to create fake backend
//       fakeBackendProvider,
//       MockBackend,
//       BaseRequestOptions
//   ],
//   import { NgModule }      from '@angular/core';
//   import { BrowserModule } from '@angular/platform-browser';
//   import { FormsModule }    from '@angular/forms';
//   import { HttpModule } from '@angular/http';
//    
//   // used to create fake backend
//   import { fakeBackendProvider } from './_helpers/index';
//   import { MockBackend, MockConnection } from '@angular/http/testing';
//   import { BaseRequestOptions } from '@angular/http';
//    
//   import { AppComponent }  from './app.component';
//   import { routing }        from './app.routing';
//    
//   import { AlertComponent } from './_directives/index';
//   import { AuthGuard } from './_guards/index';
//   import { AlertService, AuthenticationService, UserService } from './_services/index';
//   import { HomeComponent } from './home/index';
//   import { LoginComponent } from './login/index';
//   import { RegisterComponent } from './register/index';
   
  // @NgModule({
  //     imports: [
  //         BrowserModule,
  //         FormsModule,
  //         HttpModule,
  //         routing
  //     ],
  //     declarations: [
  //         AppComponent,
  //         AlertComponent,
  //         HomeComponent,
  //         LoginComponent,
  //         RegisterComponent
  //     ],
  //     providers: [
  //         AuthGuard,
  //         AlertService,
  //         AuthenticationService,
  //         UserService,
  //  
  //         // providers used to create fake backend
  //         fakeBackendProvider,
  //         MockBackend,
  //         BaseRequestOptions
  //     ],
  //     bootstrap: [AppComponent]
  // })
   
