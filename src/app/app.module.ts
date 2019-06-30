import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {DataService} from './services/data.service';
import {HttpService} from './services/http.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {NgBusyModule} from 'ng-busy';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatOptionModule, MatSelectModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    MatSidenavModule,
    NgBusyModule,
    NgxSpinnerModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    DataService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
