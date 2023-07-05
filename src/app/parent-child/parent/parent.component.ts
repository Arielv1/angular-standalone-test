import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

}
