
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
import { EffectsModule } from '@ngrx/effects';
import {RouterEffects} from './effects/router.effects'
import { QueryService } from "./services/query.service";
import { ShowAuthedDirective } from "./show-authed.directive";
import { SidenavComponent } from "./layout/sidenav.component";
import { NgAdminLteModule } from "ng-admin-lte";

export const COMPONENTS = [ShowAuthedDirective, SidenavComponent];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    NgAdminLteModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([RouterEffects])
  ],
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
        QueryService,
        UserService,
        ApiService,
        JwtService
      ]
    };
  }
}
