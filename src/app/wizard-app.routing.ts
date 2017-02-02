import {
  Routes,
  RouterModule
} from '@angular/router';
import {WIZARD_APP_ROUTES} from './wizard-app.routes';

const appRoutes: Routes = WIZARD_APP_ROUTES;

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
