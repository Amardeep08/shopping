

/*********************************
 * Angular 2/4 Home Component
Path: /app/home/home.component.ts
The home component gets the current user from local storage and all users from the user service, and makes them available to the template.
****************************************************************** */

import { Component, OnInit } from '@angular/core';
 import {AlertService} from '../_services/alert.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.servie';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
//  
export class HomeComponent implements OnInit
 {
         loading=false;
        showDialog = false;
        message=false;
    currentUser: User;
model:any;
    users: User[] = [];
 
    constructor(private userService: UserService,
                private router: Router,
                private alertService:AlertService
              
) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(this.currentUser==null)
{
        this.router.navigate(['/login']);
}
    }
//  
    ngOnInit() {
        this.loadAllUsers();
    }
//  
    deleteUser(id: number) {
        this.userService.delete(id) .subscribe(
                        data => {
                
                                       this.alertService.success(data.toString());
                
        this.loadAllUsers() ;
                        },
                        error => {
                            this.alertService.error(error);
                        });
    }
//  
    private loadAllUsers() {    
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
updateUserAgain()
{
            this.loading = true;
        
                this.userService.update(this.model)
                    .subscribe(
                        data => {
                this.showDialog=false;                                           
                this.model=null; 
        this.loading = false;
        
        this.loadAllUsers() ;
        
        this.message=true;
                            // set success message and pass true paramater to persist the message after redirecting to the login page
                            this.alertService.success('Updated successful');
        
                           // this.router.navigate(['/login']);
                        },
                        error => {
                
        this.message=true;
                            this.alertService.error(error);
                            this.loading = false;
        
        this.loadAllUsers() ;
                        });
}
updateUser(user:any)
{
        this.message=false;
        this.showDialog=true;        
        this.model=user;
        this.alertService.success('');
}
}