import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogoutService {
  private showLogout$ = new BehaviorSubject<boolean>(false);
  constructor() { }
  public getShowLogout(): Observable<boolean> {
    return this.showLogout$;
  }
  public setShowLogout(logout: boolean): void {
     this.showLogout$.next(logout);
  }
}
