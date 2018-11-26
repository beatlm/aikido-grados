import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    alert("Removed localuser")
  }
}
