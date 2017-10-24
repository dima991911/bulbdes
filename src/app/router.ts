import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { DrawMarketComponent } from './projects/draw-market/drawmarket.component';

export const router: Routes = [
    {
        path: 'portfolio',
        component: PortfolioComponent
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