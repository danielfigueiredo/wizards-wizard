import {Routes} from '@angular/router';

import {
  RioAboutPage
} from '../pages';

export const SAMPLE_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'about'
}, {
  path: 'about',
  component: RioAboutPage
}];
