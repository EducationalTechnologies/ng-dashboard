import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsPageComponent } from "./pages/settings-page.component";
import { UserRoutingModule } from "./user-routing.module";
import { NgAdminLteModule } from "ng-admin-lte";
import { ConsentPageComponent } from "./pages/consent-page.component";
import { MaterialModule } from "../material.module";
import { ConsentService } from "./services/consent.service";
import { CoreModule } from "../core/core.module";
import { EventService } from "./services/event.service";
import { SettingsService } from "./services/settings.service";
import { TimelinePageComponent } from "./pages/timeline-page.component";
import { PrivacySettingsPageComponent } from "./pages/privacy-settings-page.component";
import { TimelineItemComponent } from './components/timeline-item.component';
import { ConsentItemComponent } from './components/consent-item.component';
import { LoginSelectionPageComponent } from './pages/login-selection-page.component';
import { SignupPageComponent } from './pages/signup-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule,
    NgAdminLteModule,
    MaterialModule,
    CoreModule
  ],
  declarations: [
    SettingsPageComponent,
    ConsentPageComponent,
    TimelinePageComponent,
    PrivacySettingsPageComponent,
    TimelineItemComponent,
    ConsentItemComponent,
    LoginSelectionPageComponent,
    SignupPageComponent
  ],
  providers: [SettingsService, ConsentService, EventService]
})
export class UserModule {}
