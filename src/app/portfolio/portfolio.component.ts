import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compiler } from '@angular/core';

import { projects } from '../projects';

@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
    projects: any;

    constructor(private router: Router, private compiler: Compiler) {}

    ngOnInit() {
        this.projects = projects;
        this.compiler.clearCache;
    }

    selectProject(id) {
        if (id) {
            this.router.navigate(['works', id]);
        }
        
    }
}