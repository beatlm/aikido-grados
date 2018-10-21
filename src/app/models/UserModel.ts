import { UserFormModel } from "./UserFormModel";
import { UserStatusModel } from "./UserStatusModel";

export class UserModel {
    public name: string;
    public email: string;
    public status: Array<UserStatusModel>;
    public grado:string;
    public file?:string;
    public paymentFile?:string;
    constructor(
      name: string,
      email: string,
      status: Array<UserStatusModel>,
      grado:string,
      file?:string,
      paymentFile?:string
    ) {
      this.name = name;
      this.email = email;
      this.status = status;
      this.grado=grado;
      this.file=file;
      this.paymentFile=paymentFile;
    }
    private getTodayDate() {
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
      const nowStatus= new UserStatusModel(data.status,UserModel.getTodayDate())
      return new this(
        data.name,
        data.email,
        nowStatus,
        data.grado,
        "",
        "paymentFile"
      );
    }

    
  
  }