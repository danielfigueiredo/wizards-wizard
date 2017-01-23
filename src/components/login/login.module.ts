import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {RioLoginForm} from '../';
import {RioUiModule} from '../ui/ui.module';
import {RioModalModule} from '../modal/modal.module';
import {RioFormModule} from '../form/form.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    RioUiModule,
    RioModalModule,
    RioFormModule,
  ],
  declarations: [
    RioLoginForm,
  ],
  exports: [
    RioLoginForm,
  ]
})
export class RioLoginModule { }
