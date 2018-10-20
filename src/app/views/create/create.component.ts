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
  public recipeForm: DynamicFormComponent;
  public config = [
    {
      name: "name",
      type: "input",
      label:"Nombre",
      placeholder: "Nombre",
      divClass: "container-fluid",
      class:"form-control"
    },
    {
      name: "email",
      type: "input",
      label:"email",
      inputType:"email",
      placeholder: "e-mail",
      divClass: "container-fluid",
      class:"form-control"
    },
    {
      name: "grado",
      type: "select",
      label: "Grado solicitado",
      options: ["Shodan", "Nidan o superiores"],
      class:"form-control",
      divClass: "container-fluid",
      inputType:"hidden"
    },
    {
      name: "status",
      type: "select",
      label: "Estado",
      options: ["Alta", "Email", "Cobrado", "Enviado", "Entregado"],
      class:"form-control",
      divClass: "container-fluid ",
      value:"03-12-2016"
    },
    {
      name: "file",
      type: "file",
      placeholder: "Fichero de alta",
      divClass: "file-select container-fluid",
      class:"form-control-file",
      label:"Fichero de solicitud"
    },
    {
      name: "paymentFile",
      type: "file",
      placeholder: "Justificante de pago",
      divClass: "file-select container-fluid",
      class:"form-control-file",
      label:"Justificante de pago"
    },

    {
      name: "saveButton",
      label: "Guardar",
      type: "button",
      class:"btn btn-success ",
      buttonType: "submit",
      divClass:"d-inline p-2 button",
      click: (value) => {
        this.formSubmitted(value);
      }
    },
    {
      name: "cancelButton",
      type: "button",
      label: "Cancelar",
      buttonType: "button",
      class:"btn btn-primary",
      divClass:"d-inline p-2 button",
      click: () => {
        this.back();
      }
    }
  ];
  private back() {
    this.router.navigate([""]);
  }
  constructor(private router: Router) {}

  ngOnInit() {}

  formSubmitted(value) {
    console.log(value);
  }
}
