import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";
import {HttpClient, provideHttpClient, withInterceptors} from "@angular/common/http";
import {PrimeModule} from "./app/shared/prime/prime.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {LoadingInterceptor} from "./app/interceptors/loading.interceptor";


// bootstrapApplication(AppComponent, appConfig)
// .catch(err => console.error(err));
export function httpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,'assets/i18n/','.json');
}

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom([
      PrimeModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    ]),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([LoadingInterceptor])
    ), // <-- injecting HttpClient,

  ],
}).catch(err => console.error(err));
//
//
// bootstrapApplication(AppComponent, {
//     providers: [importProvidersFrom(BrowserModule, AppRoutingModule)]
// }).catch(err => console.error(err));
