import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})

export class AboutComponent implements OnInit {
    slideArray = [
        'Researching your activity to create an effective logo',
        'High quality and professional solving the tasks',
        'We inform about design process and show intermediate results',
        'Support after project completion',
        'Unlimited revisions'
    ];

    index: number = 0;

    slide(x) {
        this.index = x;
        clearInterval(this.runSlide);
    }

    runSlide = setInterval(() => {
        if (this.index == this.slideArray.length - 1) {
            this.index = 0
        } else {
            this.index++;
        }
    }, 2500)

    changeSlide() {
        if (this.index == this.slideArray.length - 1) {
            this.index = 0
        } else {
            this.index++;
        }
    }

    ngOnInit() {
        this.runSlide;
    }
}