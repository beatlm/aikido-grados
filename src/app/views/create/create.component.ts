import { Component, OnInit, ViewChild } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";

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
      placeholder: "Nombre",
      divClass: "leftIntputText"
    },
    {
      name: "email",
      type: "input",
      placeholder: "e-mail",
      divClass: "leftIntputText"
    },
    {
      name: "grado",
      type: "select",
      label: "Grado solicitado",
      options:["Sodan", "Nidan o superiores"],
    },
    {
      name: "status",
      type: "select",
      label: "Estado",
      options:["Alta", "Email","Cobrado","Enviado","Entregado"],

    },
    {
      name: "date",
      type: "input",
      placeholder: "Fecha del estado",
      divClass: "leftIntputText",
      disabled:"true"
    },
    {
      name: "file",
      type: "file",
      placeholder: "Fichero de alta",
      divClass: "leftIntputText",
    },
    {
      name: "paymentFile",
      type: "file",
      placeholder: "Justificante de pago",
      divClass: "leftIntputText",
    },
    
    {
      name: "saveButton",
      label: "Guardar",
      type: "button",
      class: "bigButton",
      buttonType: "submit"
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  formSubmitted(value) {
    console.log(value);
    
  }
}
