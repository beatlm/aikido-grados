
export class UserStatusModel {
  public status: string;
  public date: string;

  constructor(status: string, date: string) {
    this.status = status;
    this.date = date;
  }
}
