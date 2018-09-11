import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State, getAuthenticatedUser } from "../../reducers";

@Component({
  selector: "app-toolbar-profile",
  templateUrl: "./toolbar-profile.component.html",
  styleUrls: ["./toolbar-profile.component.css"]
})
export class ToolbarProfileComponent implements OnInit {
  avatarImgPath: string;
  username: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.avatarImgPath = "../assets/images/avatar_sample.png";

    const x = this.store
      .select(getAuthenticatedUser)
      .subscribe(user => {
        console.log("Store Subscription Toolbar Profile: ", user);
        this.username = user.email;
      });
  }
}
