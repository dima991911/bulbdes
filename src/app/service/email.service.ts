import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
    api: string = 'http://skochko.net/assets/email';

    constructor(private http: Http) { }

    addMsg(value) {
        console.log(value);
        let msg = `Name: ${value.name}, Email: ${value.email}, Message: ${value.msg}`;
        let api = `https://api.telegram.org/bot759889432:AAF_FaU2r_B0DmrHOqGxknFQxti2xh8r-Ec/sendMessage?chat_id=525098249&text=${msg}`;

        return this.http.get(api, JSON.stringify(value)).map(res => res.text());
    }

    addEmail(val) {
        let api = 'https://api.telegram.org/bot759889432:AAF_FaU2r_B0DmrHOqGxknFQxti2xh8r-Ec/sendMessage?chat_id=525098249&text=' + val;
        return this.http.get(api).map(res => res.text());
    }
}