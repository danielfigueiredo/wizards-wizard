import {Routes} from '@angular/router';

import {
  RioCharacterPage,
  RioEquipmentPage,
  RioListWizardsPage
} from '../pages';

export const WIZARD_APP_ROUTES: Routes = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'list'
}, {
  path: 'character',
  component: RioCharacterPage
}, {
  path: 'equipment',
  component: RioEquipmentPage
}, {
  path: 'list',
  component: RioListWizardsPage
}];
