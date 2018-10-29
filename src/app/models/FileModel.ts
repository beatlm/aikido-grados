
export class FileModel {
  public name: string;
  public type: string;
  public content:string|ArrayBuffer;

  constructor(name: string, type: string, content:string|ArrayBuffer) {
    this.name = name;
    this.type = type;
    this.content=content;
  }
}
