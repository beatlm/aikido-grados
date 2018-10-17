import { Component, OnInit, ViewChild } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { UserModel } from "../../models/UserModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
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
      name: "table",
      type: "table",
      list: [
        new UserModel("pepe", "pepe@gmail.com", "activo", "20180917", "shidan"),
        new UserModel("Roberto", "rover_mp@gmail.com", "activo", "20180917", "nodan")
      ]
    },

    {
      name: "addButton",
      type: "button",
      label: "Añadir usuario",
      buttonType: "button",
      class: "btn btn-primary",
      click: () => {
        this.addUser();
      }
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  private addUser() {
    this.router.navigate(["create"]);
  }
}
