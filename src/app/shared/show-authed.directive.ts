import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { UserService } from "../core/services";
import { State } from "../reducers";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

// From: https://g00glen00b.be/authentication-angular/
@Directive({ selector: "[appShowAuthed]" })
export class ShowAuthedDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private store: Store<State>,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.store
      .select(state => state.user.authenticated)
      .subscribe(auth => this.renderElementOnAuthenticated(auth));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  renderElementOnAuthenticated(auth: boolean) {
    if (auth) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
