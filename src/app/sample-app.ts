import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  NgRedux,
} from 'ng2-redux';
import {NgReduxRouter} from 'ng2-redux-router';

import {
  IAppState,
  store
} from '../store';


@Component({
  selector: 'rio-sample-app',
  // Allow app to define global styles.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./sample-app.html')
})
export class RioSampleApp {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter) {

    ngRedux.provideStore(store);

    ngReduxRouter.initialize();
  }
};
