import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { UserModel } from "../models/UserModel";
import { UserServiceService } from "./user-service.service";

@Injectable()
export class UserResolverService implements Resolve<Observable<UserModel>> {
  constructor(private userService: UserServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<UserModel> | Observable<never> {
    let id = route.paramMap.get("id");
    console.log("valor de id;" + id);
    if (id) {
      console.log("llamamos al servicio get detail");
      return this.userService.getUserDetail$(id);
    } else {
      console.log("modelo vacío");
      return null;
    }
  }
}
