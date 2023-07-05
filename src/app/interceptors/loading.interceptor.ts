import {inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoadingService} from "../services/loading.service";

export function LoadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const loadingService: LoadingService = inject(LoadingService);
  const clone: HttpRequest<unknown> = req.clone();
  console.log("in loading interceptor")
  return next(clone);

}
