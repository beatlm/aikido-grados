
export class FileModel {
  public name: string;
  public type: string;
  public fileContent:string|ArrayBuffer;

  constructor(name: string, type: string, fileContent:string|ArrayBuffer) {
    this.name = name;
    this.type = type;
    this.fileContent=fileContent;
  }
}
