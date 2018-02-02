import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { projects } from '../projects';

@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
    projects: any[] = [];
    type: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        /*this.projects = projects;*/
        this.checkUrl(null);
    }

    checkUrl(type) {

        if( !type ) {
            this.activatedRoute.params.forEach((params: Params) => {
                this.type = params['type'];
            });
        } else {
            this.type = type;
        }

        this.addProjects(this.type);
    }

    addProjects(type) {
        this.projects = [];

        if(!this.type) {
            projects.forEach((elem) => {
                if (elem.type == 'logo') {
                    this.projects.push(elem);
                }
            });
        }

        projects.forEach((elem) => {
            if (elem.type == type) {
                this.projects.push(elem);
            }
        });
    }

    /*activeLink(type) {
        let active = this.type == type;

        return active;
    }*/

    selectProject(id) {
        if (id) {
            this.router.navigate(['works', id]);
        }
    }
}