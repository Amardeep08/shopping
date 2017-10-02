/*************************************
Angular 2/4 Register Component
Path: /app/register/register.component.ts
The register component has a single register() method that creates a new user with the user service when the register form is submitted. 
******************************* */






import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import {  UserService } from '../_services/user.servie';
import {  AlertService } from '../_services/alert.service';
 
import {AuthenticationService} from '../_services/authentication.service'

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
    this.authenticationService.logout();
 }
 
    register() {
    
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                        debugger;
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}