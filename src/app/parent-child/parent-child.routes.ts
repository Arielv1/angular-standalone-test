import {Route} from "@angular/router";
import {ParentComponent} from "./parent/parent.component";
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";
import {authGuard, loginGuard} from "../guards/auth.guard";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {map, tap} from "rxjs";

export const parentChildRoutes: Route[] = [
  {
    path: '', loadComponent: () => import('./parent/parent.component').then(c => c.ParentComponent),
    children: [
      {path: 'child-a',
       loadComponent: () => import('./child-a/child-a.component').then(c => c.ChildAComponent),
        canActivate: [loginGuard]},
      {path: 'child-b', loadComponent: () => import('./child-b/child-b.component').then(c => c.ChildBComponent), canActivate: [authGuard]}
    ]
  }
]
