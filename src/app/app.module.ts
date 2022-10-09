import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import {HttpClientModule} from '@angular/common/http';
import {TcnewsapiService } from './service/tcnewsapi.service';
import {TechComponent} from './tech/tech.component';
import {SportsComponent} from './sports/sports.component'
 

@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    TechComponent,
    SportsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
