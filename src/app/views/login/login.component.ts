import { AuthenticateService } from "./../../services/authenticate.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: []
})
export class LoginComponent implements OnInit {
  public config: any;
  public loading:boolean;
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.config = [
      {
        name: "name",
        type: "input",
        label: "Usuario",
        placeholder: "",
        value: "",
        divClass: "form-option container-fluid",
        class: "form-control",
        change: () => {}
      },
      {
        name: "password",
        type: "input",
        inputType: "password",
        label: "Contraseña",
        placeholder: "",
        value: "",
        divClass: "form-option container-fluid",
        class: "form-control",
        change: () => {}
      },
      {
        type: "button",
        divClass: "d-flex button-control button",
        buttons: [
          {
            buttonType: "submit",
            name: "saveButton",
            label: "Login",
            class: "login-button btn btn-info ",
            click: () => {}
          }
        ]
      }
    ];
  }

  formSubmitted(data) {
    this.loading=true;
    console.log("logando " + data.name + "-" + data.password);
    this.authenticateService
      .login(data.name, data.password)
      .subscribe(this.isOkAdd.bind(this), this.catchError.bind(this));
  }

  private isOkAdd(value) {
    this.loading=false;
    this.router.navigate(["search"]);
    console.log("El usuario se ha logado correctamente " + value.name);
  }
  private catchError(err) {
    this.loading=false;
    console.log("error " + err);
    alert("No se ha podido logar correctamente");
  }
}
