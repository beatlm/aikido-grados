export class UserFormModel {
  public email: string;
  public file: string;
  public grado: string;
  public name: string;
  public paymentFile: string;
  public status: string;
  constructor(
    name: string,
    email: string,
    status: string,
    date: string,
    grado: string,
    file?: string,
    paymentFile?: string
  ) {
    this.name = name;
    this.email = email;
    this.status = status;
    this.grado = grado;
    this.file = file;
    this.paymentFile = paymentFile;
  }

  
}
