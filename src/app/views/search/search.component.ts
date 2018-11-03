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
  public loading=false;
  @ViewChild(DynamicFormComponent)
  public myForm: DynamicFormComponent;
  public config = [
    {
      name: "name",
      type: "input",
      value:"",
      label: "Buscar por nombre",
      placeholder: "Nombre",
      divClass: "container-fluid",
      change:()=>{
        console.log("ha cambiado el nombre");
        this.myForm.form.controls.licence.reset();
      }
    },
    {
      name: "licence",
      value:"",
      type: "input",
      label: "Buscar por número de licencia",
      placeholder: "Licencia",
      divClass: "container-fluid",
      change:()=>{
        console.log("ha cambiado el licence");
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
          class: "menu-button btn btn-primary float-right ",
          click: () => {
            this.search();
          }
        },
        {
          name: "addButton",
          label: "Añadir usuario",
          buttonType: "button",
          class: "menu-button btn btn-primary float-left",
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
      click: id => {
        this.seeUser(id);
      }
    }
  ];
  constructor(
    private router: Router,
    private userService: UserServiceService,
  ) {}

  ngOnInit() {

  }

  private addUser() {
    this.router.navigate(["create"]);
  }

  public search() {
    this.loading=true;
    const name = this.myForm.form.controls.name.value;
    const licence = this.myForm.form.controls.licence.value;
    if (name!=null && name != "" ) {
      this.userService
        .getUserListByName$(name)
        .subscribe(this.showUsers.bind(this), this.catchError.bind(this));
    } else if (licence!=null && licence != "") {
      this.userService
        .getUserListByLicence$(licence)
        .subscribe(this.showUsers.bind(this), this.catchError.bind(this));
    } else {
      this.userService
        .getUserList$()
        .subscribe(this.showUsers.bind(this), this.catchError.bind(this));
    }
  }
  private showUsers(resultado: UserModel[]) {
    this.loading=false;
    this.myForm.config[3].list = resultado;
  }

  private catchError(err) {
this.loading=false;
  //  this.loaderService.stopLoader();
    alert("Ha ocurrido un error "+err);
    console.log("error " + err);
  }

  private seeUser(id): void {
    console.log("seeuser: "+id);
    this.router.navigate(["user/" + id]);
  }
}
