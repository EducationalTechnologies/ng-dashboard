import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { CourseService } from './services/course.service';
import { DashboardService } from './services/dashboard.service';

import {RouterEffects} from './effects/router.effects'

export const COMPONENTS = [

];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([RouterEffects])
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [CourseService,DashboardService],
    };
  }
}
