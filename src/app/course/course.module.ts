import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CourseEffects} from './effects/course.effects';

import { CourseRoutingModule } from './course-routing.module';
import { CoursePageComponent } from './pages/course-page/course-page.component';

import { reducers } from './reducers';
import {NgAdminLteModule} from 'ng-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CourseEffects]),
    NgAdminLteModule


  ],
  declarations: [CoursePageComponent]
})
export class CourseModule { }
