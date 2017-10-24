import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
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