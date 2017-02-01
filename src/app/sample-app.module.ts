import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
  NgReduxModule,
  DevToolsExtension,
} from 'ng2-redux';
import {NgReduxRouter} from 'ng2-redux-router';
import {
  routing,
  appRoutingProviders
} from './sample-app.routing';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {RioSampleApp} from './sample-app';
import {
  RioCharacterForm,
} from '../pages';

// Something in the form module is necessary.
// Related to rxjs. Can't seem to import it directly to our component.
import {RioFormModule} from '../components/form/form.module';
// import {RioUiModule} from '../components/ui/ui.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    CommonModule,
    RioFormModule,
    // RioUiModule,
    NgReduxModule.forRoot(),
  ],
  declarations: [
    RioSampleApp,
    RioCharacterForm,
  ],
  bootstrap: [
    RioSampleApp
  ],
  providers: [
    DevToolsExtension,
    FormBuilder,
    NgReduxRouter,
    appRoutingProviders,
  ]
})
export class RioSampleAppModule { }
