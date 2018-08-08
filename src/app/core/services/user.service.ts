import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../../user/models/user";
import { ApiService } from "./api.service";
import { map } from "../../../../node_modules/rxjs/operators";

export const MOCK_USER = new User();
MOCK_USER.email = "d@b.de";
MOCK_USER.firstName = "Foo";
MOCK_USER.lastName = "Bar";
MOCK_USER.password = "password";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private _isLoggedIn = false;

  constructor(private apiService: ApiService) {}

  signUp(credentials): Observable<User> {
    return this.apiService.post("/users/signup", { user: credentials }).pipe(
      map(data => {
        return data;
      })
    );
  }

  public authenticated(): Observable<boolean> {
    return of(this._isLoggedIn);
  }

  signIn(email: string, password: string): Observable<User> {
    return this.apiService.post("/users/login", { email, password }).pipe(
      map(data => {
        this._isLoggedIn = true;
        return data;
      })
    );
  }
}
