import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HousingSearchComponent } from './housing-search/housing-search.component';
import { HousingEntryComponent } from './housing-entry/housing-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HousingSearchComponent,
    HousingEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
