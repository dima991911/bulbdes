import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { DrawMarketComponent } from './projects/draw-market/drawmarket.component';
import { AnextyComponent } from './projects/anexty/anexty.component';
import { BeardStyleComponent } from './projects/beard-style/beard.style.component';
import { SimGolfComponent } from './projects/sim-golf/sim.golf.component';
import { IgpComponent } from './projects/igp/igp.component';

export const router: Routes = [
    {
        path: 'portfolio',
        component: PortfolioComponent,
    },
    {
        path: 'works',
        component: WorksComponent,
        children: [
            {
                path: 'draw-market',
                component: DrawMarketComponent
            },
            {
                path: 'anexty',
                component: AnextyComponent
            },
            {
                path: 'beard-style',
                component: BeardStyleComponent
            },
            {
                path: 'sim-golf',
                component: SimGolfComponent
            },
            {
                path: 'igp',
                component: IgpComponent
            }
        ]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'price',
        component: PriceComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        redirectTo: 'portfolio',
        pathMatch: 'full'
    }
];