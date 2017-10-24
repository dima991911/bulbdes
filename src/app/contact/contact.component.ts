import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit {
    msgThank: boolean = false;

    loginForm: FormGroup;

    constructor(private emailService: EmailService) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            name: new FormControl(''),
            subject: new FormControl('',),
            email: new FormControl('', [Validators.required, Validators.email]),
            msg: new FormControl('', Validators.required)
        });
    }

    sayThank() {
        this.msgThank = false;
    }

    onSubmit(val) {
        var that = this;
        this.msgThank = true;

        this.emailService.addMsg(val).subscribe(res => {
            console.log(res);
        });

        setTimeout(function () {
            that.msgThank = false;
        }, 4000);

        this.loginForm.reset();
    }

}