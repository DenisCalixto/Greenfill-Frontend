
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FeaturedStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
