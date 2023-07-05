import {Component, OnInit} from '@angular/core';
import {Router, RouterModule, RouterOutlet} from "@angular/router";
import {PrimeModule} from "./shared/prime/prime.module";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, PrimeModule, TranslateModule]
})
export class AppComponent implements OnInit {
  title = 'angular-16-test';

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang("he");
    translate.use("he")
  }

  redirectToSecondComponent() {
    this.router.navigate(["/second"])
  }

  ngOnInit(): void {
  }

  parentChildRedirection() {
    this.router.navigate(['/parent-child'])
  }
}
