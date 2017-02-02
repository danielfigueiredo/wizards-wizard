import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  RioFormGroup,
  RioFormError,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RioFormGroup,
    // RioFormError,
  ],
  exports: [
    RioFormGroup,
    // RioFormError,
  ]
})
export class RioFormModule { }
