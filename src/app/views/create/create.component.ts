import { FormGroup } from "@angular/forms";
import { UserFormModel } from "./../../models/UserFormModel";
import { UserServiceService } from "./../../services/user-service.service";
import { UserModel } from "./../../models/UserModel";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { Router } from "@angular/router";
import { FileModel } from "../../models/FileModel";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: []
})
export class CreateComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent)
  public userForm: DynamicFormComponent;
  private uploadedFile: FileModel;
  private paymentFile: FileModel;

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
      divClass: "container-fluid "
    },
    {
      name: "createDate",
      type: "dates",
      label: "Fecha alta",
      labelClass: "dates",
      divClass: "dates-group container-fluid",
      class: "dates",
      value: ""
    },
    {
      name: "emailDate",
      type: "dates",
      label: "Fecha Email",
      labelClass: "dates",
      divClass: "dates-group container-fluid",
      class: "dates",
      value: ""
    },
    {
      name: "paymentDate",
      type: "dates",
      label: "Fecha Pago",
      labelClass: "dates",
      divClass: "dates-group container-fluid",
      class: "dates",
      value: ""
    },
    {
      name: "sentDate",
      type: "dates",
      label: "Fecha Envio",
      labelClass: "dates",
      divClass: "dates-group container-fluid",
      class: "dates",
      value: ""
    },
    {
      name: "receivedDate",
      type: "dates",
      label: "Fecha Recibido",
      labelClass: "dates",
      divClass: "dates-group container-fluid",
      class: "dates",
      value: ""
    },

    {
      name: "file",
      type: "file",
      placeholder: "Fichero de alta",
      divClass: "file-select container-fluid",
      class: "form-control-file",
      label: "Fichero de solicitud",
      change: event => {
        this.onFileChange(event, false);
      }
    },
    {
      name: "paymentFile",
      type: "file",
      placeholder: "Justificante de pago",
      divClass: "file-select container-fluid",
      class: "form-control-file",
      label: "Justificante de pago",
      change: event => {
        this.onFileChange(event, true);
      }
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
    let user: UserModel = UserModel.fromData(data);
    //Seteamos los ficheros
    user.file = this.uploadedFile;
    user.paymentFile=this.paymentFile;
    console.log(user);
    this.userService.saveUser$(user).subscribe(this.isOkAdd.bind(this), this.catchError.bind(this));

  }

  /******* ADD   */

  private isOkAdd(value) {
    this.userForm.form.reset();
    this.paymentFile=null;
    this.uploadedFile=null;
    alert("El usuario se ha dado de alta correctamente");
  }
  private catchError(err) {
    console.log("error " + err);
    alert(err);
  }

  onFileChange(event, isPaymentFile) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (isPaymentFile) {
          this.paymentFile = new FileModel(file.name, file.type, reader.result);
        } else {
          this.uploadedFile = new FileModel(
            file.name,
            file.type,
            reader.result
          );
        }
        // filename: file.name,
        //filetype: file.type,
        //value: reader.result.split(',')[1]
        //})
      };
    }
  }
}
