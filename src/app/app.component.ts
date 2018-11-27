import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { LogoutService } from "./logout.service";
import { AuthenticateService } from "./services/authenticate.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  public showLogout$: Observable<boolean>

  title = "Aikido";

  constructor(
    private showLogoutService: LogoutService,
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.showLogout$ = this.showLogoutService.getShowLogout();
  }
  public logout() {
    this.authenticateService.logout();
    this.router.navigate(['/']);
  }
}
