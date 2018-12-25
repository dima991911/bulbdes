import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { SuccessService } from '../service/success.service';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
} from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css'],
    animations: [
        trigger('showError', [
            transition(':enter', [
                style({transform: 'translateY(100px)'}),
                animate('0.5s', style({transform: 'translateY(0)'}))
            ]),
            transition(':leave', [
                animate('0.5s', style({transform: 'translateY(100px)'}))
            ])
        ])
    ]
})

export class ContactComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private emailService: EmailService, private successService: SuccessService) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            name: new FormControl(''),
            subject: new FormControl('',),
            email: new FormControl('', [Validators.required, Validators.email]),
            msg: new FormControl('', Validators.required)
        });
    }

    onSubmit(val) {
        this.emailService.addMsg(val).subscribe(res => {
            console.log(res);

            this.successService.toggleMessage(true);

            setTimeout( () => {
                this.successService.toggleMessage(false);
            }, 4000);
        });

        this.loginForm.reset();
    }

}