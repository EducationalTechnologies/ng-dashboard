import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SettingsPageComponent } from "./pages/settings-page.component";
import { ConsentPageComponent } from "./pages/consent-page.component";
import { TimelinePageComponent } from "./pages/timeline-page.component";
import { PrivacySettingsPageComponent } from "./pages/privacy-settings-page.component";

const routes: Routes = [
  { path: "", component: SettingsPageComponent },
  { path: "consent", component: ConsentPageComponent },
  {path: "timeline", component: TimelinePageComponent},
  { path: "settings/privacy", component: PrivacySettingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
