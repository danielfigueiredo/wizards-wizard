import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  RioFormGroup,
  RioCharacterForm,
  RioEquipmentForm
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RioFormGroup,
    RioCharacterForm,
    RioEquipmentForm
  ],
  exports: [
    RioFormGroup,
    RioCharacterForm,
    RioEquipmentForm
  ]
})
export class RioFormModule { }
