import { Component, OnInit, isDevMode } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from "../../core/services/user.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrls: ["./signin-page.component.css"]
})
export class SignInPageComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
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
  }

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.loginForm.value;
    console.log("Submitting Signup with credentials: ", credentials);
    const email = this.loginForm.controls["email"].value;
    const password = this.loginForm.controls["password"].value;
    this.userService.signIn(email, password).subscribe(
      data => console.log("SIGN IN: ", data),
      err => {
        console.log("SIGN IN ERROR: ", err);
        this.isSubmitting = false;
      }
    );
  }
}
