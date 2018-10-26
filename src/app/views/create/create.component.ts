import { FormGroup } from "@angular/forms";
import { UserFormModel } from "./../../models/UserFormModel";
import { UserServiceService } from "./../../services/user-service.service";
import { UserModel } from "./../../models/UserModel";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { Router } from "@angular/router";
import { UserStatusModel } from "../../models/UserStatusModel";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: []
})
export class CreateComponent implements AfterViewInit {
  private files = []; //TODO revisar si es necesario
  @ViewChild(DynamicFormComponent)
  public userForm: DynamicFormComponent;
  private initialForm: UserFormModel;
  //private initialStatus: Array<UserStatusModel>;
  // private formBackUp:UserFormModel = this.userForm.form;
  public config = [
    {
      name: "name",
      type: "input",
      label: "Nombre",
      placeholder: "Nombre",
      divClass: "container-fluid",
      class: "form-control"
    },
    {
      name: "email",
      type: "input",
      label: "email",
      inputType: "email",
      placeholder: "e-mail",
      divClass: "container-fluid",
      class: "form-control"
    },
    {
      name: "grado",
      type: "select",
      label: "Grado solicitado",
      options: ["Shodan", "Nidan o superiores"],
      class: "form-control",
      divClass: "container-fluid",
      inputType: "hidden"
    },
    {
      name: "status",
      type: "select",
      label: "Estado",
      options: ["Alta", "Email", "Cobrado", "Enviado", "Entregado"],
      class: "form-control",
      divClass: "container-fluid ",
    },
    {
      name: "dates",
      type: "dates",
      labelClass:"dates",
      divClass:"dates-group container-fluid",
      class:"dates",
      createDate: "44/66/7777",
      emailDate: "11/26/7777",
      paymentDate: "11/26/7777",
      sentDate: "11/26/7777",
      receivedDate:""
    },

    {
      name: "file",
      type: "file",
      placeholder: "Fichero de alta",
      divClass: "file-select container-fluid",
      class: "form-control-file",
      label: "Fichero de solicitud"
    },
    {
      name: "paymentFile",
      type: "file",
      placeholder: "Justificante de pago",
      divClass: "file-select container-fluid",
      class: "form-control-file",
      label: "Justificante de pago"
    },

    {
      type: "button",
      divClass: "d-flex p-2 button",
      buttons: [
        {
          buttonType: "submit",
          name: "saveButton",
          label: "Guardar",
          class: "btn btn-secondary "
        },
        {
          buttonType: "button",
          name: "cancelButton",
          type: "button",
          label: "Cancelar",
          class: "btn btn-danger",
          click: () => {
            this.back();
          }
        }
      ]
    }
  ];
  private back() {
    this.router.navigate([""]);
  }
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}
  ngAfterViewInit(): void {
    // this.initialStatus = this.userForm.form.controls.status.value;
  }
  ngOnInit() {}

  formSubmitted(data) {
    console.log(data);
    const user: UserModel = UserModel.fromData(data);
    console.log(user);
  }

  /******* ADD   */

  private isOkAdd(value) {
    this.userForm.form.reset();
    value.tags = [];
    this.files = [];

    alert("El usuario se ha dado de alta correctamente");
  }

  
}
