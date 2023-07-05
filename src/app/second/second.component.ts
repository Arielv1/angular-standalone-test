import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  constructor(private httpClient: HttpClient) {
    console.log(httpClient)
  }
}
