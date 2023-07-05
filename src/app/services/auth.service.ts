import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn$:BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false)

  constructor() { }

  get loggedIn(): Observable<Boolean> {
    return this.loggedIn$.asObservable();
  }

  login() {
    this.loggedIn$.next(true);
  }

  logout() {
    this.loggedIn$.next(false);
  }

  get loggedInValue(): Boolean {
    return this.loggedIn$.value;
  }

}
