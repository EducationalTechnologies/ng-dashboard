import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'courses', loadChildren: './course/course.module#CourseModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
