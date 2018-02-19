import { Component, OnInit } from '@angular/core';

import { projects } from '../../projects';

@Component({
    selector: 'igp',
    templateUrl: './igp.component.html',
    styleUrls: ['./igp.component.css', '../project.css']
})

export class IgpComponent implements OnInit{
    project: any;

    ngOnInit() {
        projects.forEach((elem) => {
            if (elem.id && elem.id == 33) {
                this.project = elem;
            }
        });
    }
}