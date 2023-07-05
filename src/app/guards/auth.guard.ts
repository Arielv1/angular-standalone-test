import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanMatchFn, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {tap} from "rxjs";

export const authGuard: CanActivateFn = (route, state, authService: AuthService = inject(AuthService)) => {
  console.log(authService)
  return true;
};

export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, authService: AuthService = inject(AuthService)) => {
    return authService.loggedInValue as boolean;
}
