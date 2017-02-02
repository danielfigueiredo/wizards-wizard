import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {RioHeader} from '../header/header';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RioHeader,
  ],
  exports: [
    RioHeader
  ]
})
export class RioUiModule { }
