import { Component } from '@angular/core';

import { projects } from '../../projects';

@Component({
  selector: 'anexty',
  templateUrl: './anexty.component.html',
  styleUrls: ['./anexty.component.css', '../project.css']
})

export class AnextyComponent {
    project: any;

    ngOnInit() {
        projects.forEach((elem) => {
            if (elem.id == 2) {
                this.project = elem;
            }
        });
    }
}