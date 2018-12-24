import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';

@Component({
    moduleId: module.id,
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {

    emailForm: FormGroup;

    constructor(private emailService: EmailService) {}

    ngOnInit() {
        this.emailForm = new FormGroup({
            email: new FormControl('', Validators.email)
        });
    }

    onSubmit(value) {
        var email = value.email;

        this.emailService.addEmail(email).subscribe(res => {
            console.log(res);
            this.emailForm.reset();
        });
    }
}