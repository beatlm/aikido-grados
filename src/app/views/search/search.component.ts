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
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  public config = [
    {
      name: "name",
      type: "input",
      label: "Buscar por nombre",
      placeholder: "Nombre",
      divClass: "container-fluid"
    },

    {
      type: "button",
      divClass: "d-flex p-2 button",
      buttons: [
        {
          name: "searchutton",
          label: "Buscar",
          buttonType: "button",
          class: "btn btn-primary float-right ",
          click: () => {
            this.search();
          }
        },
        {
          name: "addButton",
          label: "Añadir usuario",
          buttonType: "button",
          class: "btn btn-primary float-left",
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
      click: (id) => {
        this.seeUser(id);
      }
    }
  ];
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit() {
    /* this.myForm.controls.group.valueChanges.subscribe(val => {
      this.search();
    });*/
  }

  private addUser() {
    this.router.navigate(["create"]);
  }

  public search() {
    const name = this.myForm.form.controls.name.value;
    if (name != "") {
      this.userService
        .getUserListByName$(name)
        .subscribe(this.showUsers.bind(this), this.catchError.bind(this));
    } else {
      this.userService
        .getUserList$()
        .subscribe(this.showUsers.bind(this), this.catchError.bind(this));
    }
  }
  private showUsers(resultado: UserModel[]) {
    this.myForm.config[2].list = resultado;
  }

  private catchError(err) {
    console.log("error " + err);
  }

  private seeUser(id): void {
    this.router.navigate(["user/" + id]);
  }
}
