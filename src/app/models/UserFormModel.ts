import { FileModel } from './FileModel';

export class UserFormModel {
  public id: string;
  public name: string;
  public licence:string;
  public email: string;
  public file: FileModel;
  public grado: string;
  public paymentFile: FileModel;
  public status: string;
  public createDate?: Date;
  public emailDate?: Date;
  public paymentDate?: Date;
  public sentDate?: Date;
  public receivedDate?: Date;
  constructor(
    id:string,
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
    paymentFile?: FileModel,

  ) {
    this.id=id;
    this.name = name;
    this.licence=licence;
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
