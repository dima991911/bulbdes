import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to';

import { router } from './router';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar.mobile/navbar.mobile.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { DrawMarketComponent } from './projects/draw-market/drawmarket.component';
import { AnextyComponent } from './projects/anexty/anexty.component';
import { BeardStyleComponent } from './projects/beard-style/beard.style.component';
import { SimGolfComponent } from './projects/sim-golf/sim.golf.component';
import { IgpComponent } from './projects/igp/igp.component';

import { EmailService } from './service/email.service';
import { SuccessService } from './service/success.service';

@NgModule({
    declarations: [
        NavbarComponent,
        NavbarMobileComponent,
        HomeComponent,  
        WorksComponent,
        PortfolioComponent,
        AboutComponent,
        PriceComponent,
        ContactComponent,
        FooterComponent,
        DrawMarketComponent,
        AnextyComponent,
        BeardStyleComponent,
        SimGolfComponent,
        IgpComponent,
        AppComponent
  ],
    imports: [
        RouterModule.forRoot(router),
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        ScrollToModule.forRoot(),
        BrowserAnimationsModule
  ],
    providers: [
        EmailService,
        SuccessService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
