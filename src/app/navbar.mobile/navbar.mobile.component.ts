import { Component } from '@angular/core';

@Component({
    selector: 'mobile-navbar',
    templateUrl: './navbar.mobile.component.html',
    styleUrls: ['./navbar.mobile.component.css']
})
export class NavbarMobileComponent {
    menuHidden = false;

    getMenu() {
        this.menuHidden = !this.menuHidden;
    }
}