import { UserModel } from './../models/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserServiceService {


  private url = "https://aikido-grados-api.herokuapp.com/user";
  private find="/search/findByName?name="


  constructor(private http: HttpClient) {}

  public saveUser$(user: UserModel): Observable<any> {
    return this.http.post(this.url, user);
  }
  
}
