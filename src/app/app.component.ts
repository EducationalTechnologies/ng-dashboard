import { Component, OnInit } from "@angular/core";
import { UserService } from "./core/services";
import { Store } from "@ngrx/store";
import { State } from "./reducers";
import { TokenSessionLoginAction } from "./user/user.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new TokenSessionLoginAction());
  }
}
