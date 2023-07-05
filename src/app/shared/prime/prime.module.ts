import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DropdownModule} from "primeng/dropdown";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    DropdownModule
  ],
  exports: [
    ProgressSpinnerModule,
    DropdownModule
  ]
})
export class PrimeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: PrimeModule,
      providers: [ProgressSpinnerModule,DropdownModule]
    }
  }

}
