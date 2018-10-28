import { UserFormModel } from "./UserFormModel";
import { UserStatusModel } from "./UserStatusModel";

export class UserModel {
  public name: string;
  public email: string;
  public status: string;
  public createDate: Date;
  public emailDate: Date;
  public paymentDate: Date;
  public sentDate: Date;
  public receivedDate: Date;
  public grado: string;
  public file?: string;
  public paymentFile?: string;
  constructor(
    name: string,
    email: string,
    status: string,
    createDate: Date,
    emailDate: Date,
    paymentDate: Date,
    sentDate: Date,
    receivedDate: Date,
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
  
  static fromData(data: UserFormModel) {
   
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
