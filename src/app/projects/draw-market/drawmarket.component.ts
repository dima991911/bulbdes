import { Component, OnInit } from '@angular/core';

import { projects } from '../../projects';

@Component({
  moduleId: module.id,
  selector: 'draw-market',
  templateUrl: 'drawmarket.component.html',
  styleUrls: ['drawmarket.component.css']
})

export class DrawMarketComponent implements OnInit {
    project: any;

    ngOnInit() {
        projects.forEach((elem) => {
            if (elem.id == 1) {
                this.project = elem; 
            }
        });
    }
}