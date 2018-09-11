import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../../user/models/user";
import { ApiService } from "./api.service";
import { map, catchError } from "rxjs/operators";
import { JwtService } from "./jwt.service";

export const MOCK_USER = new User();
MOCK_USER.email = "d@b.de";
MOCK_USER.firstName = "Da";
MOCK_USER.lastName = "Bi";
MOCK_USER.password = "password";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _isLoggedIn = false;

  constructor(private apiService: ApiService, private jwtService: JwtService) {}

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get("/user/");
    }
  }

  signUp(email: string, password: string): Observable<User> {
    return this.apiService.post("/users/signup", { email, password }).pipe(
      map(data => {
        this.jwtService.saveToken(data.user.token);
        return data;
      })
    );
  }

  signIn(email: string, password: string): Observable<User> {
    return this.apiService.post("/users/login", { email, password }).pipe(
      map(data => {
        this.jwtService.saveToken(data.user.token);
        this._isLoggedIn = true;
        console.log("After Sign In: ", data);
        return data.user;
      }),
    );
  }

  signOut(): Observable<boolean> {
    this._isLoggedIn = false;
    // TOOD: replace with fetch to end session
    return of(true);
  }

  public authenticated(): Observable<boolean> {
    return of(this._isLoggedIn);
  }

  public authenticatedUser(): Observable<User> {
    // TODO: replace by fetched auth session
    return of(MOCK_USER);
  }
}
