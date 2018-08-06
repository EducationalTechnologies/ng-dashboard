import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from "../../core/services/user.service";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.css"]
})
export class SignupPageComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.signupForm.value;
    console.log("Submitting Signup with credentials: ", credentials);
    this.userService.signUp(credentials).subscribe(
      data => console.log("SIGN UP: ", data),
      err => {
        console.log("SIGN UP ERROR: ", err);
        this.isSubmitting = false;
      }
    );
  }
}
