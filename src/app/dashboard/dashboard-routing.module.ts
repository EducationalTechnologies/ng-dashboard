import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TestComponent } from './pages/test/test.component';
import { PageResolver } from './routing/page-resolver';
import { DashboardMainPageComponent } from './pages/dashboard-main-page/dashboard-main-page.component';
import { DashboardCourseComponent } from './pages/dashboard-course/dashboard-course.component';
const routes: Routes = [
  { path: '', component: DashboardMainPageComponent },
  { path: 'course/:courseId', component: DashboardCourseComponent },
  { path: 'page/:pageId', component: DashboardPageComponent, resolve :{data: PageResolver} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
