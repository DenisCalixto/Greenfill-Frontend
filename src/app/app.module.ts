
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FeaturedComponent } from './components/featured-store/featured.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { MapLandingComponent } from './components/map-landing/map-landing.component';

import { FeaturedStoreService } from './services/featured-store.service';
import { AboutService } from './services/about.service';
import { InfoService } from './services/info.service';

import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    NewsletterComponent,
    FeaturedComponent,
    TrackerComponent,
    MapLandingComponent,
    ContactComponent,
    AboutComponent,
    InfoComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FeaturedStoreService, InfoService, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
