import { Component, OnInit } from '@angular/core';

import { projects } from '../../projects';

@Component({
    selector: 'sim-golf',
    templateUrl: './sim.golf.component.html',
    styleUrls: ['./sim.golf.component.css', '../project.css']
})

export class SimGolfComponent implements OnInit {
    
    project: any;

    ngOnInit() {
        projects.forEach((elem) => {
            if (elem.id == 32) {
                this.project = elem;
            }
        });
    }

}