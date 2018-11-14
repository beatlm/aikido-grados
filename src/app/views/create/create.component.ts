import { FormGroup } from "@angular/forms";
import { UserFormModel } from "./../../models/UserFormModel";
import { UserServiceService } from "./../../services/user-service.service";
import { UserModel } from "./../../models/UserModel";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DynamicFormComponent } from "../../dynamic-form/containers/dynamic-form/dynamic-form.component";
import { Router, ActivatedRoute } from "@angular/router";
import { FileModel } from "../../models/FileModel";
import { saveAs } from "file-saver";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: []
})
export class CreateComponent implements OnInit {
  @ViewChild(DynamicFormComponent)
  public userForm: DynamicFormComponent;
  private uploadedFile: FileModel;
  private paymentFile: FileModel;
  private currentUser: UserModel;
  public config: any;
  public loading:boolean;

  private back() {
    this.router.navigate([""]);
  }
  constructor(
    private router: Router,
    private userService: UserServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentUser = this.activatedRoute.snapshot.data.user;
    console.log("oninit currentUser " + this.currentUser);
    if (this.currentUser) {
      this.uploadedFile = this.currentUser.file;
      this.paymentFile = this.currentUser.paymentFile;

      this.config = [
        {
          name: "name",
          type: "input",
          label: "Nombre",
          placeholder: "Nombre",
          divClass: "form-option container-fluid",
          class: "form-control",
          value: this.currentUser.name,
          change: () => {}
        },
        {
          name: "licence",
          type: "input",
          label: "Número de licencia",
          placeholder: "Licencia",
          divClass: "form-option container-fluid",
          class: "form-control",
          value: this.currentUser.licence ? this.currentUser.licence : "",
          change: () => {}
        },
        {
          name: "email",
          type: "input",
          label: "Email",
          inputType: "email",
          placeholder: "e-mail",
          divClass: "form-option container-fluid",
          class: "form-control",
          value: this.currentUser.email ? this.currentUser.email : "",
          change: () => {}
        },
        {
          name: "grado",
          type: "select",
          label: "Grado solicitado",
          placeholder: "Selecciona un grado",
          options: ["Shodan", "Nidan","Sandan","Yondan","Godam"],
          class: "form-control",
          divClass: "form-option container-fluid",
          inputType: "hidden",
          value: this.currentUser.grado ? this.currentUser.grado : ""
        },
        {
          name: "status",
          type: "select",
          label: "Estado",
          placeholder: "Selecciona un estado",
          options: ["Alta", "Email", "Cobrado", "Enviado", "Recibido"],
          class: "form-control",
          divClass: "form-option container-fluid ",
          value: this.currentUser.status ? this.currentUser.status : ""
        },
        {
          name: "createDate",
          type: "dates",
          label: "Fecha Alta",
          labelClass: "dates",
          divClass: "dates-group container-fluid",
          class: "dates",
          value: this.currentUser.createDate ? this.currentUser.createDate : ""
        },
        {
          name: "emailDate",
          type: "dates",
          label: "Fecha Email",
          labelClass: "dates",
          divClass: "dates-group container-fluid",
          class: "dates",
          value: this.currentUser.emailDate ? this.currentUser.emailDate : ""
        },
        {
          name: "paymentDate",
          type: "dates",
          label: "Fecha Pago",
          labelClass: "dates",
          divClass: "dates-group container-fluid",
          class: "dates",
          value: this.currentUser.paymentDate
            ? this.currentUser.paymentDate
            : ""
        },
        {
          name: "sentDate",
          type: "dates",
          label: "Fecha Envío",
          labelClass: "dates",
          divClass: "dates-group container-fluid",
          class: "dates",
          value: this.currentUser.sentDate ? this.currentUser.sentDate : ""
        },
        {
          name: "receivedDate",
          type: "dates",
          label: "Fecha Recibido",
          labelClass: "dates",
          divClass: "dates-group container-fluid",
          class: "dates",
          value: this.currentUser.receivedDate
            ? this.currentUser.receivedDate
            : ""
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
          },
          buttons: [
            {
              buttonType: "button",
              name: "saveAsButton",
              type: "button",
              label: "Descargar fichero",
              class: "btn-inline btn btn-danger ",
              click: () => {
                if (this.uploadedFile) {
                  this.saveToFileSystem(this.uploadedFile.fileContent, true);
                } else {
                  alert("No hay fichero");
                }
              }
            }
          ],
          fileName: this.uploadedFile ? this.uploadedFile.name : "Sin fichero"
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
          },
          buttons: [
            {
              buttonType: "button",
              name: "saveAsButton",
              type: "button",
              label: "Descargar fichero",
              class: "btn-inline btn btn-danger",
              click: () => {
                if (this.paymentFile) {
                  this.saveToFileSystem(this.paymentFile.fileContent, false);
                } else {
                  alert("No hay fichero");
                }
              }
            }
          ],
          fileName: this.paymentFile ? this.paymentFile.name : "Sin fichero"
        },

        {
          type: "button",
          divClass: "d-flex button-control button",
          buttons: [
            {
              buttonType: "submit",
              name: "saveButton",
              label: "Guardar",
              class: "menu-button btn btn-success "
            },
            {
              buttonType: "button",
              name: "cancelButton",
              type: "button",
              label: "Cancelar",
              class: "menu-button btn btn-primary",
              click: () => {
                this.router.navigate(["/search"]);
              }
            }
          ]
        }
      ];
    } else {
      this.config = [
        {
          name: "name",
          type: "input",
          label: "Nombre",
          placeholder: "Nombre",
          divClass: "form-option container-fluid",
          class: "form-control",
          value: "",
          change: () => {}
        },
        {
          name: "licence",
          type: "input",
          label: "Número de licencia",
          placeholder: "Licencia",
          divClass: "form-option container-fluid",
          class: "form-control",
          value: "",
          change: () => {}
        },
        {
          name: "email",
          type: "input",
          label: "Email",
          inputType: "email",
          placeholder: "e-mail",
          divClass: "form-option container-fluid",
          class: "form-control",
          value: "",
          change: () => {}
        },
        {
          name: "grado",
          type: "select",
          label: "Grado solicitado",
          placeholder: "Selecciona un grado",
          options: ["Shodan", "Nidan","Sandan","Yondan","Godam"],
          class: "form-control",
          divClass: "form-option container-fluid",
          inputType: "hidden"
        },
        {
          name: "status",
          type: "select",
          label: "Estado",
          placeholder: "Selecciona un estado",
          options: ["Alta", "Email", "Cobrado", "Enviado", "Recibido"],
          class: "form-control",
          divClass: "form-option container-fluid "
        },
        {
          name: "createDate",
          type: "dates",
          label: "Fecha Alta",
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
          },
          buttons: [
            {
              buttonType: "button",
              name: "saveAsButton",
              type: "button",
              label: "Descargar fichero",
              class: "btn-inline btn btn-secondary ",
              click: () => {
                if (this.uploadedFile) {
                  this.saveToFileSystem(this.uploadedFile.fileContent, true);
                } else {
                  alert("No hay fichero");
                }
              }
            }
          ],
          fileName: this.uploadedFile ? this.uploadedFile.name : "Sin fichero"
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
          },
          buttons: [
            {
              buttonType: "button",
              name: "saveAsButton",
              type: "button",
              label: "Descargar fichero",
              class: "btn-inline btn btn-secondary",
              click: () => {
                if (this.paymentFile) {
                  this.saveToFileSystem(this.paymentFile.fileContent, false);
                } else {
                  alert("No hay fichero");
                }
              }
            }
          ],
          fileName: this.paymentFile ? this.paymentFile.name : "Sin fichero"
        },
        {
          type: "button",
          divClass: "d-flex p-2 button",
          buttons: [
            {
              buttonType: "submit",
              name: "saveButton",
              label: "Guardar",
              class: "menu-button btn btn-success "
            },
            {
              buttonType: "button",
              name: "cancelButton",
              type: "button",
              label: "Cancelar",
              class: "menu-button btn btn-danger ",
              click: () => {
                this.router.navigate(["/search"]);
              }
            }
          ]
        }
      ];
    }
  }

  formSubmitted(data) {
    this.loading=true;
    if (this.currentUser) {
      let user: UserModel= UserModel.mixData(data,this.currentUser);
      //Seteamos los ficheros
      user.file = this.uploadedFile;
      user.paymentFile = this.paymentFile;
      this.userService.modifyUser$(user)
      .subscribe(this.isOkModify.bind(this),this.catchError.bind(this));
    } else {
      let user: UserModel = UserModel.fromData(data);
       //Seteamos los ficheros
       user.file = this.uploadedFile;
       user.paymentFile = this.paymentFile;
      this.userService
        .saveUser$(user)
        .subscribe(this.isOkAdd.bind(this), this.catchError.bind(this));
    }
  }

  /******* ADD   */

  private isOkAdd(value) {
    this.loading=false;
    this.router.navigate([""]);
    alert("El usuario se ha dado de alta correctamente");
    this.router.navigate(["/search"]);
  }
  private resetMyForm(){
    this.userForm.form.reset();
    this.paymentFile = null;
    this.uploadedFile = null;
  }
  private isOkModify(value) {
    this.loading=false;
    this.resetMyForm();
    alert("El usuario se ha modificado correctamente");
    this.router.navigate(["/search"]);
  }
  private catchError(err) {
    this.loading=false;
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
          this.config[11].fileName = file.name;
          this.paymentFile = new FileModel(file.name, file.type, reader.result);
        } else {
          this.config[10].fileName = file.name;
          this.uploadedFile = new FileModel(
            file.name,
            file.type,
            reader.result
          );
        }
      };
    }
  }

  private saveToFileSystem(response, isUploadedFile) {
    const parts: string[] = response.split(";");
    const blob = this.b64toBlob(
      parts[1].slice(7),
      isUploadedFile ? this.uploadedFile.type : this.paymentFile.type
    );
    saveAs(
      blob,
      isUploadedFile ? this.uploadedFile.name : this.paymentFile.name
    );
  }

  private b64toBlob(b64Data, contentType) {
    contentType = contentType || "";
    const sliceSize = 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
