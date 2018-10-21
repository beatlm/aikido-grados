import { UserModel } from './../models/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceService {


  private url = "https://aikido-grados-api.herokuapp.com/user";
  private find="/search/findByNameNO?name=";


  constructor(private http: HttpClient) {}

  public saveUser$(user: UserModel): Observable<any> {
    return this.http.post(this.url, user);
  }

  public getUserList$(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.content.length > 0) {
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }

  public getUserListByName$(name:String): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url+this.find+name).map((result: any) => {
      console.log(result.content); //<--it's an object
      if (result.content[0].name ) {
        return result.content; //just return "recipes"
      } else {
        return null; //TODO ¿Como hacer que no devuelva nada si no hay hnada?
      }
    });
  }


  
}
