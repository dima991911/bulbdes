import { Component } from '@angular/core';

import { projects } from '../../projects';

@Component({
    selector: 'igp',
    templateUrl: './igp.component.html',
    styleUrls: ['./igp.component.css', '../project.css']
})

export class IgpComponent {
    project: any;

    ngOnInit() {
        projects.forEach((elem) => {
            if (elem.id == 33) {
                this.project = elem;
            }
        });
    }
}