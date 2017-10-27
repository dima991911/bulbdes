import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }

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
