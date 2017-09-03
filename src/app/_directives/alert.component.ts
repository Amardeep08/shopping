/**************************************************************
 *Angular 2/4 Alert Component
Path: /app/_directives/alert.component.ts
The alert component passes alert messages to the template whenever a message is received from the alert service. It does this by subscribing to the alert service's getMessage() method which returns an Observable.

 *********************************************************************/






import { Component, OnInit } from '@angular/core';
 
//import { AlertService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    selector: 'alert',  
    templateUrl: 'alert.component.html'
})
 
export class AlertComponent {
    message: any={"text":"alert testing!!Alert is working","type":"success"};
 
//     constructor(private alertService: AlertService) { }
//  
//     ngOnInit() {
//         this.alertService.getMessage().subscribe(message => { this.message = message; });
//     }
}