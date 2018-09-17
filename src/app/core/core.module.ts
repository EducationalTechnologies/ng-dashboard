import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseService } from "./services/course.service";
import { DashboardService } from "./services/dashboard.service";
import { UserService } from "./services/user.service";
import { ApiService } from "./services/api.service";
import { JwtService } from "./services/jwt.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptor } from "./interceptors/http.token.interceptor";
import { ShowAuthedDirective } from "./show-authed.directive";
import { SidenavComponent } from "./layout/sidenav.component";
import { NgAdminLteModule } from "ng-admin-lte";

export const COMPONENTS = [ShowAuthedDirective, SidenavComponent];

@NgModule({
  imports: [CommonModule, RouterModule, NgAdminLteModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpTokenInterceptor,
          multi: true
        },
        CourseService,
        DashboardService,
        UserService,
        ApiService,
        JwtService
      ]
    };
  }
}
