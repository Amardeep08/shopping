/**************************************************************
 *Angular 2/4 Alert Component
Path: /app/_directives/alert.component.ts
The alert component passes alert messages to the template whenever a message is received from the alert service. It does this by subscribing to the alert service's getMessage() method which returns an Observable.

 *********************************************************************/






import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
 
import { AlertService } from '../_services/alert.service';
 
@Component({
    moduleId: module.id,
    selector: 'alert',  
    templateUrl: 'alert.component.html',
styleUrls: ['alert.component.css'],
animations: [
//   trigger('dialog', [
//     transition('void => *', [
//       style({ transform: 'scale3d(.3, .3, .3)' }),
//       animate(100)
//     ]),
//     transition('* => void', [
//       animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
//     ])
//   ])
]
}) 
export class AlertComponent {
    message: any;//={"text":"alert testing!!Alert is working","type":"success"};
 @Input() closable = true;
 @Input() visible: boolean;
@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
    if (!this.closable)
        this.alertService.getMessage().subscribe(message => {
    this.message = message; });
    }   

close() {
    this.message = null;
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}