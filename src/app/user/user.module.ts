import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './pages/settings-page.component';
import { UserRoutingModule } from './user-routing.module';
import { NgAdminLteModule } from '../../../node_modules/ng-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgAdminLteModule
  ],
  declarations: [SettingsPageComponent]
})
export class UserModule { }
