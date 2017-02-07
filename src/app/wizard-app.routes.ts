import {Routes} from '@angular/router';

import {
  RioCharacterPage,
  RioEquipmentPage
} from '../pages';

export const WIZARD_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'character'
}, {
  path: 'character',
  component: RioCharacterPage
}, {
  path: 'equipment',
  component: RioEquipmentPage
}];
