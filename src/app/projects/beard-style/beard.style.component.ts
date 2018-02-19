import { Component, OnInit } from '@angular/core';

import { projects } from '../../projects';

@Component({
    selector: 'beard-style',
    templateUrl: './beard.style.component.html',
    styleUrls: ['./beard.style.component.css', '../project.css']
})

export class BeardStyleComponent implements OnInit {
    project: any;

    ngOnInit() {
        projects.forEach((elem) => {
            if (elem.id && elem.id == 3) {
                this.project = elem
            }
        });
    }
}