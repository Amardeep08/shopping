/**********************************************************Angular 2/4 User Service
Path: /app/_services/user.service.ts
The user service contains a standard set of CRUD methods for managing users, it contains a jwt() method that's used to add the JWT token from local storage to the Authorization header of each http request.
********************************* */



import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 import { Observable, Subject } from 'rxjs/Rx';  
import { User } from '../_models/user';
 import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/toPromise'; 
@Injectable()
export class UserService {
    apiUrl: string = "http://localhost:10296/api/values/";// Web API URL  
    constructor(private http: Http) { }
 
    getAll() : Observable<User[]>{
        var respo= this.http.get(this.apiUrl).map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        return respo;
    }
 
    getById(id: number) {
        return this.http.get(this.apiUrl + id//, this.jwt()
).map((response: Response) => response.json());
    }
 
    create(user: User) {
    
        return this.http.post(this.apiUrl, user//, this.jwt()
).map((response: Response) => response.statusText);
    }
 
    update(user: User) {
        return this.http.put(this.apiUrl+ user.id, user//, this.jwt()
).map((response: Response) => response.statusText);
    }
 
    delete(id: number) {
        return this.http.delete(this.apiUrl + id//, this.jwt()
).map((response: Response) => response.statusText);
    }
//  
//     // private helper methods
//  
//     private jwt() {
//         // create authorization header with jwt token
//         let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//         if (currentUser && currentUser.token) {
//             let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
//             return new RequestOptions({ headers: headers });
//         }
//     }
}