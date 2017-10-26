import { Component } from '@angular/core';

import { projects } from '../../projects';

@Component({
  moduleId: module.id,
  selector: 'anexty',
  templateUrl: 'anexty.component.html',
  styleUrls: ['anexty.component.css']
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