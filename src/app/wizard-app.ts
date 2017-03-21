import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  NgRedux,
} from '@angular-redux/store';
import {NgReduxRouter} from '@angular-redux/router';
import {
  IAppState,
  store
} from '../store';

@Component({
  selector: 'rio-wizard-app',
  // Allow app to define global styles.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./wizard-app.html')
})
export class RioWizardApp {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter) {

    ngRedux.provideStore(store);

    ngReduxRouter.initialize();
  }
};
