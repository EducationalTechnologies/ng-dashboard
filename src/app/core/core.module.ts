import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { AppComponent } from './containers/app.component';
// import { NotFoundPageComponent } from './containers/not-found-page.component';


import { CourseService } from './services/course.service';

export const COMPONENTS = [

];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [CourseService],
    };
  }
}
