import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../user/models/user";
import { ApiService } from "./api.service";
import { map } from "../../../../node_modules/rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private apiService: ApiService) {}

  register(credentials): Observable<User> {
    return this.apiService.post("/users", { user: credentials }).pipe(
      map(data => {
        return data;
      })
    );
  }
}
