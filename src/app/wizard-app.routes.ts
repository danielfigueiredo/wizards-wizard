import {Routes} from '@angular/router';

import {
  RioCharacterForm
} from '../pages';

export const WIZARD_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'character'
}, {
  path: 'character',
  component: RioCharacterForm
}];
