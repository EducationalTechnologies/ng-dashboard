import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgAdminLteModule} from 'ng-admin-lte';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';

import { reducers } from './reducers';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {VizModule} from './viz/viz.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    StoreModule.forRoot(reducers),
    NgAdminLteModule,
    VizModule,
    CoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx TRULA Store DevTools',
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router', // name of reducer key
    }),  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
