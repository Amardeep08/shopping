/*********************************************************************
Angular 2/4 Authentication Service
Path: /app/_services/authentication.service.ts
The authentication service is used to login and logout of the application, to login it posts the users credentials to the api and checks the response for a JWT token, if there is one it means authentication was successful so the user details including the token are added to local storage.

The logged in user details are stored in local storage so the user will stay logged in if they refresh the browser and also between browser sessions until they logout. If you don't want the user to stay logged in between refreshes or sessions the behaviour could easily be changed by storing user details somewhere less persistent such as session storage or in a property of the authentication service. 
*********************************** */









import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../_models/user'
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    loginUser:User;
    constructor(private http: Http) { }
  apiUrl: string = "http://localhost:10296/api/authenticate/";// Web API URL  
    login(username: string, password: string) {
    this.loginUser=new User();
    this.loginUser.username=username;
    this.loginUser.password=password;
        return this.http.post(this.apiUrl, this.loginUser)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}