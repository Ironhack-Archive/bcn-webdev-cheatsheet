// -- guards

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

// -- routes

const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'page',  component: ... , canActivate: [ RequireUserGuard ] },
  { path: '**', redirectTo: '' }
];

// don't forget to register the guards in the providers

@NgModule({
   ...
  providers: [
    ...
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    ...
  ],
  ...
});
