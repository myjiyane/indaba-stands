import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { AppConfig } from './app-config';

import { IndustryComponent } from './industry/industry.component';
import { IndustryService } from './_services/industry.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
 ],
  declarations: [
    AppComponent,
    IndustryComponent
  ],
  providers: [IndustryService,
             AppConfig
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
