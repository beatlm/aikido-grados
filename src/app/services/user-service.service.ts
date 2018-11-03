import { UserModel } from "./../models/UserModel";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserServiceService {
  private url = "https://aikido-grados-api.herokuapp.com/user";
  private find = "/search/findByName?name=";
  private findLicence = "/search/findByLicenceNumber?licence=";


  constructor(private http: HttpClient) {}

  public saveUser$(user: UserModel): Observable<any> {
    return this.http.post(this.url, user);
  }

  public modifyUser$(user: UserModel): Observable<any> {
    return this.http.patch(this.url+"/"+user.id, user);
  }

  public getUserList$(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.page.totalElements > 0) {
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }

  public getUserListByName$(name: String): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(this.url + this.find + name)
      .map((result: any) => {
        console.log(result.content); //<--it's an object
        if (result.page.totalElements>0) {
          return result.content; //just return "recipes"
        } else {
          return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
        }
      });
  }
  public getUserListByLicence$(licence: String): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(this.url + this.findLicence + licence)
      .map((result: any) => {
        console.log(result.content); //<--it's an object
        if (result.page.totalElements>0) {
          return result.content; //just return "recipes"
        } else {
          return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
        }
      });
  }

  public getUserDetail$(id: String): Observable<UserModel> {
    return this.http
      .get<UserModel[]>(this.url + "/" + id)
      .map((result: any) => {
        console.log(result);
        return result;
      });
  }
}
