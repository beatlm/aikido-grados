import { UserServiceService } from './../../services/user-service.service';
import { UserModel } from "./../../models/UserModel";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  private files = []; //TODO revisar si es necesario
  @ViewChild(DynamicFormComponent)
  public userForm: DynamicFormComponent;
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
      options: [["Shodan","S"], ["Nidan o superiores","N"]],
      class: "form-control",
      divClass: "container-fluid",
      inputType: "hidden"
    },
    {
      name: "status",
      type: "select",
      label: "Estado",
      options: [["Alta","C"], ["Email","E"],["Cobrado","P"], ["Enviado","S"], ["Entregado","R"]],
     
      class: "form-control",
      divClass: "container-fluid ",
      dateValue: "03-12-2016"
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
      name: "saveButton",
      label: "Guardar",
      type: "button",
      class: "btn btn-success ",
      buttonType: "submit",
      divClass: "d-inline p-2 button",
      click: value => {
        this.formSubmitted(value);
      }
    },
    {
      name: "cancelButton",
      type: "button",
      label: "Cancelar",
      buttonType: "button",
      class: "btn btn-primary",
      divClass: "d-inline p-2 button",
      click: () => {
        this.back();
      }
    }
  ];
  private back() {
    this.router.navigate([""]);
  }
  constructor(private router: Router,
    private userService:UserServiceService) {}

  ngOnInit() {}

  formSubmitted(data) {
    console.log(data);
    const user: UserModel = UserModel.fromData(data);
    this.userService.saveUser$(user).subscribe(this.isOkAdd.bind(this));
  }

   /******* ADD   */
 
 private isOkAdd(value) {
   this.userForm.form.reset();
   value.tags = [];
   this.files = [];

   alert("El usuario se ha dado de alta correctamente");

   
 }
}
