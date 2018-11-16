import { UserModel } from "./../models/UserModel";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserServiceService {
  private url = "https://aikido-grados-api.herokuapp.com/api/user";
  private findByName = "/findByName?name=";
  private findByLicence = "/findByLicence?licence=";


  constructor(private http: HttpClient) {}

  public saveUser$(user: UserModel): Observable<any> {
    return this.http.post(this.url, user);
  }

  public modifyUser$(user: UserModel): Observable<any> {
    return this.http.patch(this.url+"/"+user.licence, user);
  }

  public getUserList$(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url, {observe: 'response'})
    .map((result: any) => {
      if (result.status !== 200) {
        throw Error("No hay datos");
      }
      return result.body; 
    });
  }

  public getUserListByName$(name: String): Observable<HttpResponse<UserModel[]>> {
    return this.http
      .get<UserModel[]>(this.url + this.findByName + name  , {observe: 'response'})
     .map((result: any) => {
        if (result.status !== 200) {
          throw Error("No hay datos");
        }
        return result.body; 
      });
  }
  public getUserListByLicence$(licence: String): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>(this.url + this.findByLicence + licence, {observe: 'response'})
      .map((result: any) => {
         if (result.status !== 200) {
           throw Error("No hay datos");
         }
         return result.body; 
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
