import { Component, OnInit, OnDestroy, isDevMode } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import "rxjs/add/operator/takeWhile";
import { UserService } from "../../core/services/user.service";
import { environment } from "../../../environments/environment";
import { isAuthenticated, State } from "../../reducers";
import { Store } from "@ngrx/store";
import { Router } from "../../../../node_modules/@angular/router";
import { AuthenticateAction } from "../user.actions";
@Component({
  selector: "app-signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrls: ["./signin-page.component.css"]
})
export class SignInPageComponent implements OnDestroy, OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  alive = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store<State>,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {
    if (isDevMode()) {
      this.loginForm.controls["email"].setValue("a@b.de");
      this.loginForm.controls["password"].setValue("1234");
    }

    this.store
      .select(isAuthenticated)
      .takeWhile(() => this.alive)
      .subscribe(value => {
        console.log("User authenticated, navigating to home");
        this.router.navigate(["/courses"]);
      });
  }

  public ngOnDestroy() {
    this.alive = false;
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.loginForm.value;
    console.log("Submitting Signup with credentials: ", credentials);
    const email = this.loginForm.controls["email"].value;
    const password = this.loginForm.controls["password"].value;

    const payload = {
      email,
      password
    };

    this.store.dispatch(new AuthenticateAction(payload));

    this.userService.signIn(email, password).subscribe(
      data => {
        console.log("SIGN IN: ", data);
      },
      err => {
        console.log("SIGN IN ERROR: ", err);
        this.isSubmitting = false;
      }
    );
  }
}
