import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  NgReduxModule,
  DevToolsExtension,
} from '@angular-redux/store';
import {NgReduxRouter} from '@angular-redux/router';
import {
  routing,
  appRoutingProviders
} from './wizard-app.routing';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {RioWizardApp} from './wizard-app';
import {
  RioCharacterPage,
  RioEquipmentPage,
  RioListWizardsPage
} from '../pages';

import {RioFormModule} from '../components/form/form.module';
import {RioUiModule} from '../components/ui/ui.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule,
    RioFormModule,
    RioUiModule,
    NgReduxModule,
  ],
  declarations: [
    RioWizardApp,
    RioCharacterPage,
    RioEquipmentPage,
    RioListWizardsPage
  ],
  bootstrap: [
    RioWizardApp
  ],
  providers: [
    DevToolsExtension,
    FormBuilder,
    NgReduxRouter,
    appRoutingProviders,
  ]
})
export class RioWizardAppModule { }
