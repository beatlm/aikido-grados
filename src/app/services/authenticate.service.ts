import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LogoutService } from "../logout.service";

@Injectable()
export class AuthenticateService {
  private url = "https://aikido-grados-api.herokuapp.com/authenticate";

  constructor(private http: HttpClient, private showLogout: LogoutService) {}

  login(username: string, password: string) {
    return this.http
      .post<any>(this.url, { username: username, password: password })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        this.showLogout.setShowLogout(true);
        return user;
      });
  }

  logout() {
    this.showLogout.setShowLogout(false);
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
