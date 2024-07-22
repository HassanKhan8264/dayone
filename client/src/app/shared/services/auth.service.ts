import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ProfileService } from "../../core/http/profile.service";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private profile: ProfileService) {}
  isAuthenticated() {
    return this.profile.loggedIn().pipe(
      map((authenticated) => {
        return authenticated;
      }),
    );
  }
}
