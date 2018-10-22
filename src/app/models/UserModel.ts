import { UserFormModel } from "./UserFormModel";
import { UserStatusModel } from "./UserStatusModel";

export class UserModel {
  public name: string;
  public email: string;
  public status: string;
  public createDate: string;
  public emailDate: string;
  public paymentDate: string;
  public sentDate: string;
  public receivedDate: string;
  public grado: string;
  public file?: string;
  public paymentFile?: string;
  constructor(
    name: string,
    email: string,
    status: string,
    createDate: string,
    emailDate: string,
    paymentDate: string,
    sentDate: string,
    receivedDate: string,
    grado: string,
    file?: string,
    paymentFile?: string
  ) {
    this.name = name;
    this.email = email;
    this.status = status;
    this.createDate = createDate;
    this.emailDate = emailDate;
    this.paymentDate = paymentDate;
    this.sentDate = sentDate;
    this.receivedDate = receivedDate;
    this.grado = grado;
    this.file = file;
    this.paymentFile = paymentFile;
  }
  private static getTodayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    let day: String;
    let month: String;

    if (dd < 10) {
      day = "0" + dd;
    } else {
      day = dd.toString();
    }

    if (mm < 10) {
      month = "0" + mm;
    } else {
      month = mm.toString();
    }

    return day + "/" + month + "/" + yyyy;
  }
  static fromData(data: UserFormModel) {
    if (data.status === "Alta") {
      data.createDate = UserModel.getTodayDate();
    } else if (data.status === "Email") {
      data.emailDate = UserModel.getTodayDate();
    } else if (data.status === "Cobrado") {
      data.paymentDate = UserModel.getTodayDate();
    } else if (data.status === "Enviado") {
      data.sentDate = UserModel.getTodayDate();
    } else if (data.status === "Entregado") {
      data.receivedDate = UserModel.getTodayDate();
    }
    return new this(
      data.name,
      data.email,
      data.status,
      data.createDate,
      data.emailDate,
      data.paymentDate,
      data.sentDate,
      data.receivedDate,
      data.grado,
      "",
      "paymentFile"
    );
  }
}
