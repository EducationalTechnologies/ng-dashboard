import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PageResolver } from './routing/page-resolver';

import { CourseResolver } from './routing/course-resolver';
const routes: Routes = [
  
  // { path: 'course/:courseId', component: DashboardCourseComponent, resolve :{data: CourseResolver}  },
  // { path: 'page/:pageId', component: DashboardPageComponent, resolve :{data: PageResolver} },
  { path: 'course/:courseId/page/:pageId', component: DashboardPageComponent, resolve :{data: PageResolver} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
