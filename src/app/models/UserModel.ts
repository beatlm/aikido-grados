import { FileModel } from "./FileModel";
import { UserFormModel } from "./UserFormModel";

export class UserModel {
  public id: string;
  public name: string;
  public licence: string;
  public email: string;
  public status: string;
  public createDate: Date;
  public emailDate: Date;
  public paymentDate: Date;
  public sentDate: Date;
  public receivedDate: Date;
  public grado: string;
  public file?: FileModel;
  public paymentFile?: FileModel;
  constructor(
    id: string,
    name: string,
    licence: string,
    email: string,
    status: string,
    createDate: Date,
    emailDate: Date,
    paymentDate: Date,
    sentDate: Date,
    receivedDate: Date,
    grado: string,
    file?: FileModel,
    paymentFile?: FileModel
  ) {
    this.id = id;
    this.name = name;
    this.licence = licence;
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
  static mixData(data: UserFormModel, originalData: UserModel) {
    let mixData: UserModel = originalData;
    if (data.name.length > 0) {
      mixData.name = data.name;
    }
    if (data.licence.length > 0) {
      mixData.licence = data.licence;
    }
    if (data.email.length > 0) {
      mixData.email = data.email;
    }
    if (data.status.length > 0) {
      mixData.status = data.status;
    }
    if (data.createDate) {
      mixData.createDate = data.createDate;
    }
    if (data.emailDate) {
      mixData.emailDate = data.emailDate;
    }
    if (data.paymentDate) {
      mixData.paymentDate = data.paymentDate;
    }
    if (data.sentDate) {
      mixData.sentDate = data.sentDate;
    }
    if (data.receivedDate) {
      mixData.receivedDate = data.receivedDate;
    }
    if (data.grado.length > 0) {
      mixData.grado = data.grado;
    }
    if (data.file) {
      mixData.file = data.file;
    }
    if (data.paymentFile) {
      mixData.paymentFile = data.paymentFile;
    }

    return mixData;
  }
  static fromData(data: UserFormModel) {
    return new this(
      data.id,
      data.name,
      data.licence,
      data.email,
      data.status,
      data.createDate,
      data.emailDate,
      data.paymentDate,
      data.sentDate,
      data.receivedDate,
      data.grado,
      data.file,
      data.paymentFile
    );
  }
}
