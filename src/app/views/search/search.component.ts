import { UserServiceService } from "./../../services/user-service.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { UserModel } from "../../models/UserModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: []
})
export class SearchComponent implements OnInit {
  public loading = false;
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  public config = [
    {
      name: "name",
      type: "input",
      value: "",
      label: "Buscar por nombre",
      placeholder: "Nombre",
      divClass: "container-fluid",
      class: "search-input",
      change: () => {
        this.myForm.form.controls.licence.reset();
      }
    },
    {
      name: "licence",
      value: "",
      type: "input",
      label: "Buscar por número de licencia",
      placeholder: "Licencia",
      divClass: "container-fluid",
      class: "search-input",
      change: () => {
        this.myForm.form.controls.name.reset();
      }
    },
    {
      type: "button",
      divClass: "d-flex p-2 button",
      buttons: [
        {
          name: "searchutton",
          label: "Buscar",
          buttonType: "button",
          class: "menu-button btn btn-danger float-right ",
          click: () => {
            this.search();
          }
        },
        {
          name: "addButton",
          label: "Añadir usuario",
          buttonType: "button",
          class: "menu-button btn btn-success float-left",
          click: () => {
            this.addUser();
          }
        }
      ]
    },
    {
      name: "table",
      type: "table",
      class: "table table-striped ",
      list: null,
      click: licence=> {
        this.seeUser(licence);
      }
    }
  ];
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit() {}

  private addUser() {
    this.router.navigate(["create"]);
  }

  public search() {
    this.loading = true;
    const name = this.myForm.form.controls.name.value;
    const licence = this.myForm.form.controls.licence.value;
    if (name != null && name != "") {
      this.userService
        .getUserListByName$(name)
        .subscribe(response=> {
          this.loading = false;
          this.myForm.config[3].list = response;
        }, 
        err => {
         this.catchError(err);
        });

    } else if (licence != null && licence != "") {
      this.userService
        .getUserListByLicence$(licence)
        .subscribe(response=> {
          this.loading = false;
          this.myForm.config[3].list = response;
        }, 
        err => {
         this.catchError(err);
        });
    } else {
      this.userService
        .getUserList$()
        .subscribe(response=> {
          this.loading = false;
          this.myForm.config[3].list = response;
        }, 
        err => {
         this.catchError(err);
        });
    }
  }
  private showUsers(resultado: UserModel[]) {
    this.loading = false;
    this.myForm.config[3].list = resultado;
  }

  private catchError(err) {
    this.loading = false;
    this.myForm.config[3].list = null;
    console.log("Ha ocurrido un error  " + err);
  }

  private seeUser(licence): void {
    console.log("seeuser: " + licence);
    this.router.navigate(["user/" + licence]);
  }
}
