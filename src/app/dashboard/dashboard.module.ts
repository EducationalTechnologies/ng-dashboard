import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {DashboardEffects} from './effects/dashboard.effects'
import {QueryEffects} from './effects/query.effects'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { reducers } from './reducers';
import { TestComponent } from './pages/test/test.component';
import { DashboardRowComponent } from './components/dashboard-row/dashboard-row.component';
import { DashboardColumnComponent } from './components/dashboard-column/dashboard-column.component';
import { NgAdminLteModule } from 'ng-admin-lte';
import { SidebarPagesMenuComponent } from './components/sidebar-pages-menu/sidebar-pages-menu.component';
import { PageResolver } from './routing/page-resolver';
import { DashboardMainPageComponent } from './pages/dashboard-main-page/dashboard-main-page.component';
import {VizModule} from '../viz/viz.module';
import { DashboardCourseComponent } from './pages/dashboard-course/dashboard-course.component';
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
  declarations: [DashboardPageComponent, TestComponent, DashboardRowComponent, DashboardColumnComponent, SidebarPagesMenuComponent, DashboardMainPageComponent, DashboardCourseComponent, WidgetComponent]
})
export class DashboardModule { }
