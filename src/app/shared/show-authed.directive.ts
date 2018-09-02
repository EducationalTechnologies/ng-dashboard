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

// Inspired by: https://g00glen00b.be/authentication-angular/
@Directive({ selector: "[appShowAuthed]" })
export class ShowAuthedDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private store: Store<State>,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;
  subscription: Subscription;

  @Input()
  set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit(): void {
    this.subscription = this.store
      .select(function(state) {
        console.log("Init app show authed, state: " + state.user.authenticated);
        return state.user.authenticated;
      } )
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
