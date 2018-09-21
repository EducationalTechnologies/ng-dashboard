import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {DashboardEffects} from './effects/dashboard.effects'
import {QueryEffects} from './effects/query.effects'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { reducers } from './reducers';
import { DashboardRowComponent } from './components/dashboard-row/dashboard-row.component';
import { DashboardColumnComponent } from './components/dashboard-column/dashboard-column.component';
import { NgAdminLteModule } from 'ng-admin-lte';
import { SidebarPagesMenuComponent } from './components/sidebar-pages-menu/sidebar-pages-menu.component';
import { PageResolver } from './routing/page-resolver';
import {VizModule} from '../viz/viz.module';

import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  imports: [
    CommonModule,
    
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([DashboardEffects, QueryEffects]),
    DashboardRoutingModule,
    NgAdminLteModule,
    VizModule

  ],
  exports:[
    SidebarPagesMenuComponent
  ],
  providers:[PageResolver],
  declarations: [DashboardPageComponent,  DashboardRowComponent, DashboardColumnComponent, SidebarPagesMenuComponent,  WidgetComponent]
})
export class DashboardModule { }
