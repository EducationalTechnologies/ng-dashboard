import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseService } from "./services/course.service";
import { DashboardService } from "./services/dashboard.service";
import { UserService } from "./services/user.service";
import { ApiService } from "./services/api.service";
import { JwtService } from "./services/jwt.service";

export const COMPONENTS = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        CourseService,
        DashboardService,
        UserService,
        ApiService,
        JwtService
      ]
    };
  }
}
