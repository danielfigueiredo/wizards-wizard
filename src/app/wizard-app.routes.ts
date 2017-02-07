import {Routes} from '@angular/router';

import {
  RioCharacterForm,
  RioEquipmentForm
} from '../pages';

export const WIZARD_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'character'
}, {
  path: 'character',
  component: RioCharacterForm
}, {
  path: 'equipment',
  component: RioEquipmentForm
}];
