import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgAdminLteModule} from 'ng-admin-lte';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgAdminLteModule,
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
