import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  RioFormGroup,
} from './index';
import {RioCharacterFormComponent} from './character/character-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RioFormGroup,
    RioCharacterFormComponent,
  ],
  exports: [
    RioFormGroup,
    RioCharacterFormComponent,
  ]
})
export class RioFormModule { }
