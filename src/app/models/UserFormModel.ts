import { UserStatusModel } from "./UserStatusModel";
import { AbstractControl, FormControl } from "@angular/forms";

export class UserFormModel {
  public name: string;
  public email: string;
  public file: string;
  public grado: string;
  public paymentFile: string;
  public status: string;
  public createDate?: string;
  public emailDate?: string;
  public paymentDate?: string;
  public sentDate?: string;
  public receivedDate?: string;
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
  static fromData(data: any) {
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
