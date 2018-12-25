import { Component } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    animations: [
        trigger('showStep', [
            transition(':enter', [
                style({marginTop: '-150px'}),
                animate('0.3s ease-out', style({marginTop: '0'}))
            ]),
            transition(':leave', [
                animate('0.3s ease-in', style({marginTop: '-150px'}))
            ])
        ])
    ]
})

export class HomeComponent {
    brief: boolean = false;
    research: boolean = false;
    design: boolean = false;
    presentation: boolean = false;
    delivery: boolean = false;
    support: boolean = false;

    changeBrief() {
        this.brief = !this.brief;
    }

    changeResearch() {
        this.research = !this.research;
    }

    changeDesign() {
        this.design = !this.design;
    }

    changePresentation() {
        this.presentation = !this.presentation;
    }

    changeDelivery() {
        this.delivery = !this.delivery;
    }

    changeSupport() {
        this.support = !this.support;
    }
}