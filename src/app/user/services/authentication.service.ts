import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  isLoggedIn = false;

  // TODO: replace with actual authentication
  login() {
    this.isLoggedIn = true;
  }

  // TODO: replace with actual authentication
  logout() {
    this.isLoggedIn = false;
  }

  constructor() {}
}
