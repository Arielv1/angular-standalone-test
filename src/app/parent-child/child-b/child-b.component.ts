import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimeModule} from "../../shared/prime/prime.module";
import {TranslateModule} from "@ngx-translate/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [CommonModule, PrimeModule, TranslateModule],
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.login()
  }

}
