import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { SuccessService } from './service/success.service';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('showSuccess', [
          transition(':enter', [
              style({transform: 'translateX(500px)'}),
              animate('0.5s', style({transform: 'translateX(0)'}))
          ]),
          transition(':leave', [
              animate('0.5s', style({transform: 'translateX(500px)'}))
          ])
      ])
  ]
})
export class AppComponent implements OnInit {
    constructor(private router: Router, public successService: SuccessService, @Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    arrowTop: boolean = false;

    @HostListener('window:scroll', [])
    onScroll() {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > screen.height / 2) {
            this.arrowTop = true;
        } else {
            this.arrowTop = false;
        }
    }
}
