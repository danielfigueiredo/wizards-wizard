import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {RioLogo} from '../logo/logo.component';
import {RioContainer} from '../container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RioLogo,
    RioContainer
  ],
  exports: [
    RioLogo,
    RioContainer
  ]
})
export class RioUiModule { }
