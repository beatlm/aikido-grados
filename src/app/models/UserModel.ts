export class UserModel {
    public name: string;
    public email: string;
    public status: string;
    public date: string;
    public grado:string;
    public file?:string;
    public paymentFile?:string;
    constructor(
      name: string,
      email: string,
      status: string,
      date: string,
      grado:string,
      file?:string,
      paymentFile?:string
    ) {
      this.name = name;
      this.email = email;
      this.status = status;
      this.date = date;
      this.grado=grado;
      this.file=file;
      this.paymentFile=paymentFile;
    }
  }