import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
    api: string = 'http://skochko.net/assets/email';

    constructor(private http: Http) { }

    addMsg(value) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'text/html');

        return this.http.post(this.api + '/message.php', JSON.stringify(value), { headers: headers }).map(res => res.text());
    }

    addEmail(val) {
        var headers = new Headers();
        headers.append('Content-Type', 'text/html');
        headers.append('Accept', 'text/html');

        return this.http.post(this.api + '/email.php', val, { headers: headers }).map(res => res.text());
    }
}