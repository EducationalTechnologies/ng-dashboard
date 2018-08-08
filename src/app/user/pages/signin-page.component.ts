import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { UserService } from "../../core/services/user.service";

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
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
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitting = true;
    const credentials = this.loginForm.value;
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
