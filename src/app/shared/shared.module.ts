import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShowAuthedDirective } from "./show-authed.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [ShowAuthedDirective],
  exports: [ShowAuthedDirective]
})
export class SharedModule {}
