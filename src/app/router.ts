import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { DrawMarketComponent } from './projects/draw-market/drawmarket.component';
import { AnextyComponent } from './projects/anexty/anexty.component';

export const router: Routes = [
    {
        path: 'works',
        component: WorksComponent,
        children: [
            {
                path: 'portfolio',
                component: PortfolioComponent
            },
            {
                path: 'draw-market',
                component: DrawMarketComponent
            },
            {
                path: 'anexty',
                component: AnextyComponent
            },
            {
                path: '',
                redirectTo: 'portfolio',
                pathMatch: 'full'
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
        redirectTo: 'works',
        pathMatch: 'full'
    }
];